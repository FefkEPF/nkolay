const BASE_URL = "https://nkolaymedya.com";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NKolay Medya",
  legalName: "NKolay Medya Teknolojileri A.Ş.",
  url: BASE_URL,
  email: "mailto:info@nkolaymedya.com",
  telephone: "+905464773815",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Zafer, Adile Naşit Blv. No:30",
    addressLocality: "Esenyurt",
    addressRegion: "İstanbul",
    postalCode: "34513",
    addressCountry: "TR",
  },
  sameAs: ["https://wa.me/905464773815"],
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "NKolay Medya Teknolojileri A.Ş.",
  image: `${BASE_URL}/nkolay_logo.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Zafer, Adile Naşit Blv. No:30",
    addressLocality: "Esenyurt",
    addressRegion: "İstanbul",
    postalCode: "34513",
    addressCountry: "TR",
  },
  telephone: "+905464773815",
  email: "info@nkolaymedya.com",
  openingHours: "Mo-Fr 09:00-18:00",
  priceRange: "₺₺₺",
};

export const serviceSchema = (service: {
  title: string;
  description: string;
  badge?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: service.title,
  description: service.description,
  provider: {
    "@type": "Organization",
    name: "NKolay Medya",
  },
  areaServed: "TR",
});

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    name: item.name,
    item: item.url,
  })),
});

export const faqSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

export const blogPostSchema = (post: {
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: post.title,
  description: post.excerpt,
  author: { "@type": "Person", name: post.author },
  publisher: {
    "@type": "Organization",
    name: "NKolay Medya",
    logo: { "@type": "ImageObject", url: `${BASE_URL}/nkolay_logo.png` },
  },
  datePublished: post.publishedAt,
  dateModified: post.publishedAt,
  mainEntityOfPage: { "@type": "WebPage", "@id": post.url },
});

export const blogListSchema = (posts: { title: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: posts.map((post, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    name: post.title,
    url: post.url,
  })),
});
