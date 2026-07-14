import { describe, it, expect } from "vitest";
import { COMPANY, ROUTES } from "./constants";

describe("centralized constants", () => {
  it("exposes contact details", () => {
    expect(COMPANY.email).toBe("info@nkolaymedya.com");
    expect(COMPANY.phoneHref).toMatch(/^tel:\+/);
    expect(COMPANY.whatsappHref).toMatch(/^https:\/\/wa\.me\//);
  });

  it("builds route paths", () => {
    expect(ROUTES.home).toBe("/");
    expect(ROUTES.service("abc")).toBe("/hizmet/abc");
    expect(ROUTES.legal("kvkk")).toBe("/kvkk");
    expect(ROUTES.references).toBe("/referanslar");
  });
});
