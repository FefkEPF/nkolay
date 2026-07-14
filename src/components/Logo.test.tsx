import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Logo from "./Logo";

describe("Logo", () => {
  it("renders the brand mark with accessible alt text", () => {
    render(<Logo />);
    const img = screen.getByAltText(/NKolay Medya/i);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "/nkolay_logo.png");
  });
});
