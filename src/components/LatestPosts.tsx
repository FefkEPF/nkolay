import { ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "../data";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../lib/constants";
import { motion } from "motion/react";
import { useReducedMotion } from "../lib/useReducedMotion";

export default function LatestPosts() {
  const navigate = useNavigate();
  const reduced = useReducedMotion();
  const noMotion = { opacity: 1, y: 0 } as const;
  const instant = { duration: 0.01 } as const;
  const spring = { type: "spring", stiffness: 80, damping: 18, mass: 0.8 } as const;

  const latest = BLOG_POSTS.slice(0, 3);

  const go = (slug: string) => {
    navigate(ROUTES.blogPost(slug));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-20 md:py-28 bg-surface" id="son-yazilar">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2.5 bg-gray-50/80 backdrop-blur-sm border border-gray-200/60 rounded-full px-4 py-1.5 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-[13px] font-medium text-gray-600 tracking-wide">Blog</span>
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 tracking-tight leading-tight">
              Son <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-dark">Yazılar</span>
            </h2>
          </div>
          <button
            onClick={() => {
              navigate(ROUTES.blog);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="hidden sm:inline-flex items-center gap-1.5 text-[14px] font-medium text-primary hover:text-primary-dark transition-colors shrink-0"
          >
            Tümünü Gör <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latest.map((post, i) => (
            <motion.article
              key={post.id}
              initial={reduced ? noMotion : { opacity: 0, y: 24 }}
              whileInView={reduced ? noMotion : { opacity: 1, y: 0 }}
              whileHover={reduced ? undefined : { y: -4, transition: { type: "spring", stiffness: 120, damping: 14 } }}
              viewport={{ once: true, margin: "-40px" }}
              transition={reduced ? instant : { ...spring, delay: i * 0.06 }}
              onClick={() => go(post.slug)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  go(post.slug);
                }
              }}
              className="group bg-white border border-gray-200/60 rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:border-primary/20 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] flex flex-col"
            >
              <div className="h-36 bg-gradient-to-br from-primary-light to-gray-50 flex items-center justify-center text-4xl">
                {post.coverEmoji}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="text-[12px] font-semibold text-primary mb-2">{post.category}</span>
                <h3 className="font-display font-semibold text-[17px] text-gray-900 tracking-tight leading-snug group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="font-sans text-[13.5px] text-gray-500 font-light leading-relaxed mt-2 flex-1 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <button
          onClick={() => {
            navigate(ROUTES.blog);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="sm:hidden mt-8 w-full inline-flex items-center justify-center gap-1.5 text-[14px] font-medium text-primary border border-primary/20 rounded-full py-3"
        >
          Tüm Yazılar <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
