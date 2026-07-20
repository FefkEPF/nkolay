import { useEffect } from "react";

const SITE_NAME = "NKolay Medya";
const BASE_URL = "https://nkolaymedya.com";

type SeoOptions = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
};

export function useSeo(options: SeoOptions = {}) {
  const { title, description, path, image } = options;

  useEffect(() => {
    const fullTitle = title
      ? title.includes(SITE_NAME)
        ? title
        : `${title} | ${SITE_NAME}`
      : SITE_NAME;

    const canonical = path ? `${BASE_URL}${path}` : BASE_URL;
    const ogImage = image || `${BASE_URL}/og-image.jpg`;

    document.title = fullTitle;

    const ensureMeta = (attr: "name" | "property", key: string, value: string) => {
      let tag = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, key);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", value);
    };

    const ensureLink = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", rel);
        document.head.appendChild(link);
      }
      link.setAttribute("href", href);
    };

    if (description) {
      ensureMeta("name", "description", description);
      ensureMeta("property", "og:description", description);
      ensureMeta("name", "twitter:description", description);
    } else {
      // Clear description tags if the current page omits them, otherwise a
      // stale description from a previous route leaks across SPA navigation.
      ["name=description", "property=og:description", "name=twitter:description"].forEach(
        (sel) => {
          const tag = document.querySelector(`meta[${sel}]`);
          if (tag) tag.setAttribute("content", "");
        }
      );
    }

    ensureMeta("property", "og:title", fullTitle);
    ensureMeta("property", "og:type", "website");
    ensureMeta("name", "twitter:title", fullTitle);
    ensureMeta("name", "twitter:card", "summary_large_image");
    ensureMeta("property", "og:url", canonical);
    ensureMeta("property", "og:image", ogImage);
    ensureMeta("name", "twitter:image", ogImage);
    ensureLink("canonical", canonical);

    return () => {
      document.title = SITE_NAME;
    };
  }, [title, description, path, image]);
}
