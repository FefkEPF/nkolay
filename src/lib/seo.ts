import { useEffect } from "react";

const SITE_NAME = "NKolay Medya";

export function useSeo(title: string, description?: string) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title.includes(SITE_NAME)
      ? title
      : `${title} | ${SITE_NAME}`;

    if (description) {
      document
        .querySelector('meta[name="description"]')
        ?.setAttribute("content", description);
    }

    return () => {
      document.title = previousTitle;
    };
  }, [title, description]);
}
