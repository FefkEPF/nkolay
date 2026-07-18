export const COMPANY = {
  name: "NKolay Medya",
  legalName: "NKolay Medya Teknolojileri A.Ş.",
  email: "info@nkolaymedya.com",
  phoneDisplay: "0546 477 38 15",
  phoneHref: "tel:+905464773815",
  whatsappHref: "https://wa.me/905464773815",
  address: "Zafer, Adile Naşit Blv. No:30, 34513 Esenyurt/İstanbul",
  mapsHref:
    "https://maps.google.com/?q=Zafer,+Adile+Na%C5%9Fit+Blv.+No:30,+34513+Esenyurt/%C4%B0stanbul",
} as const;

export const ROUTES = {
  home: "/",
  services: "/hizmetler",
  service: (id: string) => `/hizmet/${id}`,
  references: "/referanslar",
  blog: "/blog",
  blogPost: (slug: string) => `/blog/${slug}`,
  contact: "/iletisim",
  legal: (id: "kvkk" | "terms" | "privacy") => `/${id}`,
} as const;
