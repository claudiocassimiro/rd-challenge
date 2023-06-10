import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import BusinessCard from "../";

describe("BusinessCard", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  const customGlobal: any = global;

  const mockProps = {
    setCardData: vi.fn(),
    cardData: {
      name: "Cláudio Cassimiro",
      phone: "(81) 9 9352-0671",
      email: "test@gmail.com",
    },
  };

  describe("When the component BusinessCard is rendered on", () => {
    it("mobile devices, must not have the image with alt 'Imagem de homem pintando uma tela'", () => {
      customGlobal.innerWidth = 360;
      customGlobal.innerHeight = 640;

      render(<BusinessCard {...mockProps} />);

      expect(
        screen.queryByAltText("Imagem de homem pintando uma tela")
      ).not.toBeInTheDocument();
    });

    it("desktop devices, must have image with alt 'Imagem de homem pintando uma tela'", () => {
      customGlobal.innerWidth = 1220;
      customGlobal.innerHeight = 720;

      render(<BusinessCard {...mockProps} />);

      expect(
        screen.getByAltText("Imagem de homem pintando uma tela")
      ).toBeInTheDocument();
    });
  });

  describe("When the component BusinessCard is rendered with values on prop cardData", () => {
    it("the values on prop cardData, should be rendered on component", () => {
      render(<BusinessCard {...mockProps} />);

      const name = screen.getByText("Cláudio Cassimiro");
      const phone = screen.getByText("(81) 9 9352-0671");
      const email = screen.getByText("test@gmail.com");

      expect(name).toBeInTheDocument();
      expect(phone).toBeInTheDocument();
      expect(email).toBeInTheDocument();
    });
  });
});
