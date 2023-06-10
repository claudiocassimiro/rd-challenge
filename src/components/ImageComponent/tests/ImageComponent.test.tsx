import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import ImageComponent from "../";

describe("ImageComponent", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  describe("When the component is rendered and the props width and height", () => {
    it("are setteds, the image with data-testid 'image-not-fill' must be rendered and 'image-fill' not", () => {
      const mockProps = {
        src: "/mock-src",
        alt: "mock-alt",
        width: 123,
        height: 123,
      };

      render(<ImageComponent {...mockProps} />);

      expect(screen.getByTestId("image-not-fill")).toBeInTheDocument();
    });

    it("are not setteds, the image with data-testid 'image-fill' must be rendered and 'image-not-fill' not", () => {
      const mockProps = {
        src: "/mock-src",
        alt: "mock-alt",
      };

      render(<ImageComponent {...mockProps} />);

      expect(screen.queryByTestId("image-not-fill")).not.toBeInTheDocument();

      expect(screen.getByTestId("image-fill")).toBeInTheDocument();
    });
  });
});
