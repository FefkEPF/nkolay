import { useParams, useNavigate, Navigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { getBlogPost, BLOG_POSTS } from "../data";
import { ROUTES } from "../lib/constants";
import { useReducedMotion } from "../lib/useReducedMotion";
import { useSeo } from "../lib/seo";
import { blogPostSchema, breadcrumbSchema } from "../lib/schema";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const reduced = useReducedMotion();
  const noMotion = { opacity: 1, y: 0 } as const;
  const instant = { duration: 0.01 } as const;
  const spring = { type: "spring", stiffness: 80, damping: 18, mass: 0.8 } as const;

  const post = slug ? getBlogPost(slug) : undefined;

  useSeo({
    title: post?.title ?? "Blog",
    description: post?.excerpt ?? "NKolay Medya blog yazıları.",
    path: post ? ROUTES.blogPost(post.slug) : "/blog",
  });

  if (!post) return <Navigate to={ROUTES.blog} replace />;

  const related = BLOG_POSTS.filter((p) => p.id !== post.id && p.category === post.category)
    .concat(BLOG_POSTS.filter((p) => p.id !== post.id && p.category !== post.category))
    .slice(0, 3);

  const goList = () => {
    navigate(ROUTES.blog);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goPost = (s: string) => {
    navigate(ROUTES.blogPost(s));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const articleSchema = blogPostSchema({
    title: post.title,
    excerpt: post.excerpt,
    author: post.author,
    publishedAt: post.publishedAt,
    url: `https://nkolaymedya.com${ROUTES.blogPost(post.slug)}`,
  });

  const breadcrumb = breadcrumbSchema([
    { name: "Ana Sayfa", url: "https://nkolaymedya.com/" },
    { name: "Blog", url: "https://nkolaymedya.com/blog" },
    { name: post.title, url: `https://nkolaymedya.com${ROUTES.blogPost(post.slug)}` },
  ]);

  return (
    <article className="pt-32 pb-24 md:pt-40 md:pb-32 bg-white min-h-screen" id="blog-post">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <button
          onClick={goList}
          className="inline-flex items-center gap-2 text-[14px] font-medium text-gray-500 hover:text-primary transition-colors mb-8 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" /> Tüm Yazılar
        </button>

        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-[12px] font-semibold text-primary bg-primary-light px-2.5 py-1 rounded-full">
            {post.category}
          </span>
          <span className="flex items-center gap-1 text-[12px] text-gray-400">
            <Clock className="w-3 h-3" /> {post.readTime}
          </span>
        </div>
        <h1 className="font-display font-bold text-3xl md:text-5xl text-gray-900 tracking-tight leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center gap-3 mt-5 text-[13px] text-gray-400">
          <span>{post.author}</span>
          <span>•</span>
          <span>
            {new Date(post.publishedAt).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })}
          </span>
        </div>

        {/* Cover */}
        <div className="h-56 md:h-72 rounded-3xl bg-gradient-to-br from-primary-light to-gray-50 flex items-center justify-center text-7xl my-8">
          {post.coverEmoji}
        </div>

        {/* Body */}
        <div className="space-y-6">
          {post.content.map((block, i) => (
            <motion.div
              key={`${block.heading ?? "para"}-${i}`}
              initial={reduced ? noMotion : { opacity: 0, y: 16 }}
              whileInView={reduced ? noMotion : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={reduced ? instant : spring}
            >
              {block.heading ? (
                <h2 className="font-display font-semibold text-xl md:text-2xl text-gray-900 tracking-tight mt-4 mb-2">
                  {block.heading}
                </h2>
              ) : null}
              <p className="font-sans text-[16px] text-gray-600 font-light leading-relaxed">
                {block.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-gray-100">
          {post.tags.map((t) => (
            <span key={t} className="text-[12px] text-gray-500 bg-gray-50 border border-gray-200/60 px-3 py-1.5 rounded-full">
              #{t}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 bg-primary-light rounded-3xl border border-primary/10 p-8 text-center">
          <h3 className="font-display font-bold text-2xl text-gray-900 tracking-tight">
            Ücretsiz strateji raporu alın
          </h3>
          <p className="font-sans text-gray-500 text-[15px] font-light mt-2">
            Markanıza özel dijital büyüme planını 7 gün içinde hazırlıyoruz.
          </p>
          <button
            onClick={() => {
              navigate(ROUTES.contact);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="mt-5 inline-flex items-center gap-2 bg-primary text-white font-semibold text-[15px] px-8 py-4 rounded-full hover:bg-primary-dark transition-all"
          >
            Teklif Al <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Related */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-20">
        <h2 className="font-display font-bold text-2xl md:text-3xl text-gray-900 tracking-tight mb-8">
          İlgili Yazılar
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {related.map((p) => (
            <button
              key={p.id}
              onClick={() => goPost(p.slug)}
              className="group text-left bg-gray-50/70 border border-gray-200/60 rounded-3xl p-6 hover:border-primary/20 transition-all cursor-pointer"
            >
              <div className="text-4xl mb-4">{p.coverEmoji}</div>
              <span className="text-[12px] font-semibold text-primary">{p.category}</span>
              <h3 className="font-display font-semibold text-[16px] text-gray-900 tracking-tight leading-snug mt-1 group-hover:text-primary transition-colors">
                {p.title}
              </h3>
            </button>
          ))}
        </div>
      </div>
    </article>
  );
}
