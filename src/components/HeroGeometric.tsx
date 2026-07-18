import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall, Sparkles, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { COMPANY, ROUTES } from "../lib/constants";
import { cn } from "../lib/utils";
import { useReducedMotion } from "../lib/useReducedMotion";

// ─── Shader (componentry.dev Hero Geometric — exact spec) ────────────────────

const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`;

const fragmentShader = `
uniform float uTime;
uniform vec2 uResolution;
uniform vec3 uColor1;
uniform vec3 uColor2;
varying vec2 vUv;

vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

float snoise(vec2 v){
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
           -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
  + i.x + vec3(0.0, i1.x, 1.0 ));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

float bayerDither4x4(vec2 uv) {
    int x = int(mod(uv.x, 4.0));
    int y = int(mod(uv.y, 4.0));

    int matrix[16];
    matrix[0] = 0; matrix[1] = 8; matrix[2] = 2; matrix[3] = 10;
    matrix[4] = 12; matrix[5] = 4; matrix[6] = 14; matrix[7] = 6;
    matrix[8] = 3; matrix[9] = 11; matrix[10] = 1; matrix[11] = 9;
    matrix[12] = 15; matrix[13] = 7; matrix[14] = 13; matrix[15] = 5;

    return float(matrix[y * 4 + x]) / 16.0;
}

void main() {
    vec2 uv = vUv;
    vec2 coord = gl_FragCoord.xy;

    // Enhanced noise with time
    float noise = snoise(uv * 1.5 + vec2(uTime * 0.12, uTime * 0.08)) * 0.4;

    // Diagonal gradient from bottom-left to top-right
    float diagonal = (uv.x + uv.y) * 0.5;

    // Combine for gradient - emphasize corners
    float gradient = diagonal * 1.2 + noise;

    // Interpolate colors based on gradient
    vec3 deepBlue = uColor1;
    vec3 paleBlue = uColor2;
    vec3 softBlue = mix(deepBlue, paleBlue, 0.33);
    vec3 lightBlue = mix(deepBlue, paleBlue, 0.66);

    // Map to colors with more distinct steps
    vec3 color;
    if (gradient < 0.3) {
        color = deepBlue;
    } else if (gradient < 0.55) {
        color = softBlue;
    } else if (gradient < 0.8) {
        color = lightBlue;
    } else {
        color = paleBlue;
    }

    // Enhanced dithering at boundaries
    float dither = bayerDither4x4(coord);
    float threshold = fract(gradient * 4.0);

    if (gradient < 0.3 && threshold > dither * 0.5) {
        color = softBlue;
    } else if (gradient >= 0.3 && gradient < 0.55 && threshold > dither * 0.5) {
        color = lightBlue;
    } else if (gradient >= 0.55 && gradient < 0.8 && threshold > dither * 0.5) {
        color = paleBlue;
    }

    // Softer fade at extreme bottom-left to preserve depth
    vec2 cornerDist = vec2(uv.x, uv.y);
    float fadeMask = smoothstep(0.0, 0.25, length(cornerDist));
    color = mix(deepBlue, color, fadeMask);

    // Add subtle vignette to emphasize corners
    float vignette = smoothstep(1.2, 0.3, length(uv - 0.5));
    color = mix(color, color * 0.95, (1.0 - vignette) * 0.3);

    gl_FragColor = vec4(color, 1.0);
}
`;

// ─── Full-Screen Shader Mesh (clip-space quad: always fills canvas) ──────────

function GradientPlane({
    color1,
    color2,
    speed = 0.4,
}: {
    color1: string;
    color2: string;
    speed?: number;
}) {
    const materialRef = useRef<THREE.ShaderMaterial>(null);

    useFrame((state) => {
        const { clock, size } = state;
        const mat = materialRef.current;
        if (!mat) return;
        // Mutate the material's OWN uniforms (three clones the JSX `uniforms`
        // object on mount, so updating an external object never reaches the GPU).
        const u = mat.uniforms;
        u.uTime.value = clock.getElapsedTime() * speed;
        u.uResolution.value.set(size.width, size.height);
        u.uColor1.value.set(color1);
        u.uColor2.value.set(color2);
    });

    return (
        <mesh frustumCulled={false}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[new Float32Array([-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, 1, 1, 0, -1, 1, 0]), 3]}
                />
                <bufferAttribute
                    attach="attributes-uv"
                    args={[new Float32Array([0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1]), 2]}
                />
            </bufferGeometry>
            <shaderMaterial
                ref={materialRef}
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={{
                    uTime: { value: 0 },
                    uResolution: { value: new THREE.Vector2(1000, 1000) },
                    uColor1: { value: new THREE.Color(color1) },
                    uColor2: { value: new THREE.Color(color2) },
                }}
                transparent={true}
                depthWrite={false}
                depthTest={false}
            />
        </mesh>
    );
}

// ─── WebGL Canvas Wrapper ─────────────────────────────────────────────────────

function WebGLBackground({ color1, color2, speed }: { color1: string; color2: string; speed: number }) {
    return (
        <div
            aria-hidden="true"
            className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
        >
            <Canvas
                orthographic
                camera={{ position: [0, 0, 1] }}
                dpr={[1, 1]}
                frameloop="always"
                gl={{
                    antialias: false,
                    alpha: true,
                }}
            >
                <GradientPlane color1={color1} color2={color2} speed={speed} />
            </Canvas>
        </div>
    );
}

// ─── Main Component ───────────────────────────────────────────────────────────

interface HeroGeometricProps {
    title1?: string;
    title2?: string;
    description?: string;
    className?: string;
    /** Primary color for the gradient shader. (componentry.dev Hero Geometric: color1) */
    color1?: string;
    /** Secondary color for the gradient shader. (componentry.dev Hero Geometric: color2) */
    color2?: string;
    /** Animation speed multiplier for the shader noise. (componentry.dev Hero Geometric: speed) */
    speed?: number;
}

export default function HeroGeometric({
    title1 = "NKolay Medya ile",
    title2 = "Dijitalde Zirveye Ulaşın.",
    description = "Veriye dayalı stratejiler, yaratıcı üretim ve performans odaklı reklam yönetimi ile markanızı ölçülebilir sonuçlara taşıyoruz.",
    color1 = "#450a0a",
    color2 = "#C41E2A",
    speed = 0.4,
    className,
}: HeroGeometricProps) {
    const navigate = useNavigate();
    const reduced = useReducedMotion();

    const noMotion = { opacity: 1, y: 0 } as const;
    const instant = { duration: 0.01 } as const;
    const spring = { type: "spring", stiffness: 80, damping: 18, mass: 0.8 } as const;

    const stats = [
        { value: "4.8x",  label: "Ortalama ROAS Oranı",   highlight: true  },
        { value: "+340%", label: "Erişim Artışı",          highlight: false },
    ];

    const features = ["Veriye Dayalı Strateji", "Ölçülebilir Büyüme", "Kurumsal İletişim"];

    return (
        <div
            className={cn("relative w-full overflow-hidden", className)}
            style={{ minHeight: "100vh", backgroundColor: color1 }}
        >
            {/* WebGL animated background — componentry.dev Hero Geometric shader layer */}
            <WebGLBackground color1={color1} color2={color2} speed={speed} />
            <div className="absolute inset-0 z-[5] pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.05) 40%, rgba(0,0,0,0.15) 100%)" }} />

            {/* Page content */}
            <div
                className="relative flex flex-col justify-center"
                style={{ zIndex: 10, minHeight: "100vh", paddingTop: "7rem", paddingBottom: "4rem" }}
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                        {/* ── Left Column ─────────────────────────────── */}
                        <div className="lg:col-span-7 flex flex-col items-center text-center md:items-start md:text-left">

                            {/* Badge */}
                            <motion.div
                                initial={reduced ? noMotion : { opacity: 0, y: -8 }}
                                animate={reduced ? noMotion : { opacity: 1, y: 0 }}
                                transition={reduced ? instant : spring}
                                className="inline-flex items-center gap-2.5 pl-2 pr-5 py-2 rounded-full glass-pill mx-auto md:mx-0 gpu-accelerated"
                            >
                                <span
                                    className="flex h-5 w-5 items-center justify-center rounded-full text-white"
                                    style={{ background: "#C41E2A" }}
                                >
                                    <Sparkles className="h-3 w-3" />
                                </span>
                                <span className="text-[13px] font-bold tracking-wide uppercase text-white hero-text-shadow">
                                    Yeni Nesil Dijital Ajans
                                </span>
                            </motion.div>

                            {/* Headline — high-impact display typography */}
                            <motion.h1
                                initial={reduced ? noMotion : { opacity: 0, y: 32 }}
                                animate={reduced ? noMotion : { opacity: 1, y: 0 }}
                                transition={reduced ? instant : { ...spring, delay: 0.12 }}
                                className="mt-7 font-display font-black tracking-tighter leading-[0.95] text-5xl md:text-6xl lg:text-[64px] text-white hero-text-shadow-lg mx-auto md:mx-0 gpu-accelerated"
                            >
                                {title1}{" "}
                                <br className="hidden sm:block" />
                                <span
                                    className="bg-clip-text text-transparent"
                                    style={{ backgroundImage: "linear-gradient(135deg, #fff 20%, #fca5a5 100%)" }}
                                >
                                    {title2}
                                </span>
                            </motion.h1>

                            {/* Divider */}
                            <motion.div
                                initial={reduced ? noMotion : { opacity: 0, scaleX: 0 }}
                                animate={reduced ? noMotion : { opacity: 1, scaleX: 1 }}
                                transition={reduced ? instant : { ...spring, delay: 0.18 }}
                                className="mt-7 h-0.5 w-20 origin-left rounded-full mx-auto md:mx-0 gpu-accelerated"
                                style={{ background: "rgba(255,255,255,0.45)" }}
                                aria-hidden="true"
                            />

                            {/* Description */}
                            <motion.p
                                initial={reduced ? noMotion : { opacity: 0, y: 20 }}
                                animate={reduced ? noMotion : { opacity: 1, y: 0 }}
                                transition={reduced ? instant : { ...spring, delay: 0.22 }}
                                className="mt-7 max-w-xl text-lg font-normal leading-[1.75] text-white/90 hero-text-shadow gpu-accelerated"
                            >
                                {description}
                            </motion.p>

                            {/* Feature pills */}
                            <motion.ul
                                initial={reduced ? noMotion : { opacity: 0, y: 20 }}
                                animate={reduced ? noMotion : { opacity: 1, y: 0 }}
                                transition={reduced ? instant : { ...spring, delay: 0.28 }}
                                className="mt-8 flex flex-wrap gap-2.5 justify-center md:justify-start gpu-accelerated"
                            >
                                {features.map((f) => (
                                    <li
                                        key={f}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-semibold text-white glass-pill"
                                    >
                                        <Check className="h-3.5 w-3.5 opacity-80" />
                                        {f}
                                    </li>
                                ))}
                            </motion.ul>

                            {/* CTAs */}
                            <motion.div
                                initial={reduced ? noMotion : { opacity: 0, y: 20 }}
                                animate={reduced ? noMotion : { opacity: 1, y: 0 }}
                                transition={reduced ? instant : { ...spring, delay: 0.34 }}
                                className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:items-center gpu-accelerated"
                            >
                                <button
                                    id="hero-cta-primary"
                                    onClick={() => navigate(ROUTES.contact)}
                                    className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 font-semibold text-[15px] px-8 py-4 rounded-full transition-all duration-200 active:scale-[0.98] bg-white text-primary shadow-[var(--shadow-card)]"
                                >
                                    <span>Hemen Başlayın</span>
                                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                                </button>

                                <a
                                    id="hero-cta-phone"
                                    href={COMPANY.phoneHref}
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 font-medium text-[15px] px-8 py-4 rounded-full transition-all duration-200 text-white glass-cta"
                                >
                                    <PhoneCall className="h-5 w-5" />
                                    <span>{COMPANY.phoneDisplay}</span>
                                </a>
                            </motion.div>

                            {/* Trust line */}
                            <motion.p
                                initial={reduced ? noMotion : { opacity: 0 }}
                                animate={reduced ? noMotion : { opacity: 1 }}
                                transition={reduced ? instant : { ...spring, delay: 0.44 }}
                                className="mt-6 text-[12.5px] font-normal text-white/70 hero-text-shadow text-center md:text-left gpu-accelerated"
                            >
                                İlk strateji raporu 7 gün içinde <span className="text-white/40 px-1.5">•</span> Özel hesap sorumlusu <span className="text-white/40 px-1.5">•</span> Esnek iptal politikası
                            </motion.p>
                        </div>

                        {/* ── Right Column — N Logo ───────────────────── */}
                        <div className="hidden md:flex lg:col-span-5 items-center justify-center relative mt-10 lg:mt-0 select-none">
                            {/* N Logo */}
                            <motion.div
                                initial={reduced ? noMotion : { opacity: 0, y: 30 }}
                                animate={reduced ? noMotion : { opacity: 1, y: 0 }}
                                transition={reduced ? instant : { ...spring, delay: 0.2 }}
                                whileHover={reduced ? undefined : { scale: 1.04, transition: { type: "spring", stiffness: 120, damping: 12 } }}
                                whileInView={reduced ? undefined : {
                                    y: [0, -14, 0],
                                    transition: { repeat: Infinity, duration: 6.5, ease: "easeInOut" },
                                }}
                                viewport={{ once: false, amount: 0.5 }}
                                className="relative z-10 w-80 h-80 md:w-[28rem] md:h-[28rem] lg:w-[36rem] lg:h-[36rem] gpu-accelerated"
                            >
                                <picture>
                                    <source srcSet="/hero_n.512.webp" type="image/webp" />
                                    <img
                                        src="/hero_n.opt.2x.png"
                                        alt="NKolay Medya"
                                        width={512}
                                        height={512}
                                        decoding="async"
                                        loading="eager"
                                        draggable={false}
                                        className="w-full h-full object-contain"
                                        style={{ filter: "brightness(1.15) contrast(1.05) drop-shadow(0 25px 80px rgba(0,0,0,0.50))" }}
                                    />
                                </picture>
                            </motion.div>
                        </div>
                    </div>

                    {/* ── Stats Row ────────────────────────────────────── */}
                    <motion.div
                        initial={reduced ? noMotion : { opacity: 0, y: 28 }}
                        animate={reduced ? noMotion : { opacity: 1, y: 0 }}
                        transition={reduced ? instant : { ...spring, delay: 0.40 }}
                        className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-5 gpu-accelerated"
                    >
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                whileHover={reduced ? undefined : { y: -4, transition: { type: "spring", stiffness: 140, damping: 14 } }}
                                className="rounded-2xl p-7 text-center glass-card shadow-[var(--shadow-card)]"
                            >
                                <div
                                    className="text-4xl md:text-5xl font-bold tracking-tight"
                                    style={{ color: stat.highlight ? "var(--color-primary)" : "#fff" }}
                                >
                                    {stat.value}
                                </div>
                                <div className="text-[13px] mt-2.5 font-semibold tracking-wide text-white/85">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <div
                        className="mt-24 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent"
                        aria-hidden="true"
                    />
                </div>
            </div>
        </div>
    );
}
