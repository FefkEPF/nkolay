"use client";

import { useEffect } from "react";

type DesignMode = "flat" | "skeuomorphic" | null;

export default function DevDesignToggle() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const initial = params.get("design");
    if (initial === "skeuomorphic" || initial === "flat") {
      document.documentElement.dataset.theme = initial;
    }
  }, []);

  const apply = (next: DesignMode) => {
    const url = new URL(window.location.href);
    if (next) {
      url.searchParams.set("design", next);
      document.documentElement.dataset.theme = next;
    } else {
      url.searchParams.delete("design");
      delete document.documentElement.dataset.theme;
    }
    window.history.replaceState({}, "", url.toString());
  };

  return (
    <div className="design-toggle">
      <button type="button" onClick={() => apply("flat")}>
        Flat
      </button>
      <button type="button" onClick={() => apply("skeuomorphic")}>
        Skeuomorphic
      </button>
      <button type="button" onClick={() => apply(null)}>
        Reset
      </button>
    </div>
  );
}
