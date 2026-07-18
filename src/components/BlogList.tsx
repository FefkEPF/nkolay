import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Clock } from "lucide-react";
import { BLOG_POSTS, BLOG_CATEGORIES } from "../data";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../lib/constants";
import { useReducedMotion } from "../lib/useReducedMotion";
import { useSeo } from "../lib/seo";

export default function BlogList() {
  const navigate = useNavigate();
  const reduced = useReducedMotion();
  const noMotion = { opacity: 1, y: 0 } as const;
  const instant = { duration: 0.01 } as const;
  const spring = { type: "spring", stiffness: 80, damping: 18, mass: 0.8 } as const;

  const [active, setActive] = useState<string>("Tümü");

  useSeo({
    title: "Blog",
    description:
      "Dijital pazarlama, SEO, sosyal medya ve e-ticaret üzerine uzman makaleler. NKolay Medya bloguyla büyümeyi öğrenin.",
    path: "/blog",
  });

  const filtered =
    active === "Tümü"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((p) => p.category === active);

  const go = (slug: string) => {
    navigate(ROUTES.blogPost(slug));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-white min-h-screen" id="blog-page">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-6">
          <div className="inline-flex items-center gap-2.5 bg-gray-50 border border-gray-100 rounded-full px-4 py-1.5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-[13px] font-medium text-gray-600 tracking-wide">
              NKolay Medya Blog
            </span>
          </div>
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 tracking-tight leading-tight">
            Dijitalde <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-dark">Büyüme</span> Yazıları
          </h1>
          <p className="font-sans text-gray-500 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Reklam, SEO, sosyal medya ve e-ticaret üzerine uygulanabilir stratejiler; uzman ekibimizden.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {["Tümü", ...BLOG_CATEGORIES].map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-200 cursor-pointer border ${
                active === cat
                  ? "bg-primary text-white border-primary shadow-sm"
                  : "bg-white text-gray-600 border-gray-200 hover:border-primary/30 hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post, i) => (
            <motion.article
              key={post.id}
              initial={reduced ? noMotion : { opacity: 0, y: 24 }}
              whileInView={reduced ? noMotion : { opacity: 1, y: 0 }}
              whileHover={reduced ? undefined : { y: -4, transition: { type: "spring", stiffness: 120, damping: 14 } }}
              viewport={{ once: true, margin: "-40px" }}
              transition={reduced ? instant : { ...spring, delay: i * 0.05 }}
              onClick={() => go(post.slug)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  go(post.slug);
                }
              }}
              className="group bg-white border border-gray-200/60 rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:border-primary/20 hover:shadow-[0_2px_8px_rgba(0,0,0,0.03),0_8px_24px_rgba(0,0,0,0.06)] flex flex-col"
            >
              <div className="h-40 bg-gradient-to-br from-primary-light to-gray-50 flex items-center justify-center text-5xl">
                {post.coverEmoji}
              </div>
              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[12px] font-semibold text-primary bg-primary-light px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-[12px] text-gray-400">
                    <Clock className="w-3 h-3" /> {post.readTime}
                  </span>
                </div>
                <h2 className="font-display font-semibold text-[18px] text-gray-900 tracking-tight leading-snug group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="font-sans text-[14px] text-gray-500 font-light leading-relaxed mt-2.5 flex-1">
                  {post.excerpt}
                </p>
                <div className="pt-6 flex items-center justify-between">
                  <span className="text-[12px] text-gray-400">
                    {new Date(post.publishedAt).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-gray-500 group-hover:text-primary transition-colors">
                    Oku
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
