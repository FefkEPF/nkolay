import { useEffect, useRef } from "react";

interface GeometricBackgroundProps {
  color1?: string;
  color2?: string;
  /** Maximum device-pixel-ratio used when sizing the canvas. Higher = sharper but heavier. */
  dprCap?: number;
}

function hexToRgb(hex: string): [number, number, number] {
  const clean = hex.replace("#", "");
  const full = clean.length === 3 ? clean.split("").map((c) => c + c).join("") : clean;
  const num = parseInt(full, 16);
  return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
}

const VERT = `
attribute vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

const FRAG = `
precision mediump float;
uniform float u_time;
uniform vec2 u_resolution;
uniform vec3 u_color1;
uniform vec3 u_color2;

vec3 mod289(vec3 x){return x - floor(x*(1.0/289.0))*289.0;}
vec2 mod289(vec2 x){return x - floor(x*(1.0/289.0))*289.0;}
vec3 permute(vec3 x){return mod289(((x*34.0)+1.0)*x);} 
float snoise(vec2 v){
  const vec4 C = vec4(0.211324865405187,0.366025403784439,-0.577350269189626,0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0,0.0) : vec2(0.0,1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod289(i);
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m; m = m*m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

void main(){
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  float aspect = u_resolution.x / u_resolution.y;
  vec2 p = uv;
  p.x *= aspect;
  float t = u_time * 0.12;
  float n1 = snoise(p * 1.4 + vec2(t, t * 0.6));
  float n2 = snoise(p * 2.1 + vec2(-t * 0.4, t * 0.8) + n1 * 0.5);
  float n = n1 * 0.6 + n2 * 0.4;
  float g = 0.5 + 0.5 * n;
  vec3 col = mix(u_color1, u_color2, smoothstep(0.15, 0.85, g));
  float d = distance(uv, vec2(0.5));
  col *= 1.0 - d * 0.12;
  gl_FragColor = vec4(col, 1.0);
}
`;

function compile(gl: WebGLRenderingContext, type: number, src: string): WebGLShader | null {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, src);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.warn("Shader compile error:", gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

export default function GeometricBackground({
  color1 = "#FFF1F2",
  color2 = "#FCA5A5",
  dprCap = 2,
}: GeometricBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // ensure canvas fills its parent and has a fallback gradient background
    canvas.style.background = `linear-gradient(135deg, ${color1}, ${color2})`;
    canvas.style.backgroundSize = "cover";
    canvas.style.backgroundRepeat = "no-repeat";
    canvas.style.backgroundPosition = "center";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.display = "block";

    const gl = canvas.getContext("webgl", { antialias: false, alpha: false, powerPreference: "low-power" }) ||
      (canvas.getContext("experimental-webgl") as WebGLRenderingContext | null);
    if (!gl) {
      return;
    }

    const vs = compile(gl, gl.VERTEX_SHADER, VERT);
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.warn("Program link error:", gl.getProgramInfoLog(program));
      return;
    }
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);
    const posLoc = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, "u_time");
    const uRes = gl.getUniformLocation(program, "u_resolution");
    const uColor1 = gl.getUniformLocation(program, "u_color1");
    const uColor2 = gl.getUniformLocation(program, "u_color2");

    const [r1, g1, b1] = hexToRgb(color1);
    const [r2, g2, b2] = hexToRgb(color2);
    gl.uniform3f(uColor1, r1 / 255, g1 / 255, b1 / 255);
    gl.uniform3f(uColor2, r2 / 255, g2 / 255, b2 / 255);

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, dprCap);
      const w = Math.max(1, Math.round(canvas.clientWidth * dpr));
      const h = Math.max(1, Math.round(canvas.clientHeight * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
      gl.uniform2f(uRes, w, h);
    };

    let resizeRaf = 0;
    const onResize = () => {
      if (resizeRaf) return;
      resizeRaf = requestAnimationFrame(() => {
        resizeRaf = 0;
        resize();
      });
    };
    resize();
    window.addEventListener("resize", onResize);

    // ---- Pause when offscreen or tab hidden (prevents lag / wasted GPU) ----
    let raf = 0;
    let lastTs = 0;
    let elapsed = 0;
    let onScreen = true;
    let pageVisible = !document.hidden;

    // Guard against a huge delta after the tab/section was paused (lastTs reset to 0).
    const renderSafe = (now: number) => {
      if (lastTs === 0) lastTs = now;
      const dt = Math.min(now - lastTs, 64);
      lastTs = now;
      elapsed += dt;
      gl.uniform1f(uTime, elapsed / 1000);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      raf = requestAnimationFrame(renderSafe);
    };

    const startLoopSafe = () => {
      if (raf || !onScreen || !pageVisible) return;
      lastTs = 0;
      raf = requestAnimationFrame(renderSafe);
    };
    const stopLoop = () => {
      if (raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    };

    const onVisibility = () => {
      pageVisible = !document.hidden;
      if (pageVisible) {
        startLoopSafe();
      } else {
        stopLoop();
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

      const io = new IntersectionObserver(
        ([entry]) => {
          onScreen = entry.isIntersecting;
          if (onScreen) {
            startLoopSafe();
          } else {
            stopLoop();
          }
        },
        { threshold: 0 }
      );
    io.observe(canvas);

    return () => {
      stopLoop();
      cancelAnimationFrame(resizeRaf);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
      io.disconnect();
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(buffer);
    };
  }, [color1, color2, dprCap]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full block"
      aria-hidden="true"
      style={{ display: "block", width: "100%", height: "100%" }}
    />
  );
}
