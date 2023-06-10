import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "../pages/";

vi.mock("next/font/google", () => ({
  Darker_Grotesque: vi.fn().mockImplementation(() => ({ className: "" })),
  Nunito_Sans: vi.fn().mockImplementation(() => ({ className: "" })),
  Red_Hat_Display: vi.fn().mockImplementation(() => ({ className: "" })),
}));

describe("Home", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  describe("When component Home is rendered", () => {
    it("should have a title and subtile with texts 'Gerador de Cartão de Visitas' and 'Crie grátis seu cartão de visita em passos rápidos! Você o insere no Instagram e demais canais digitais.'", () => {
      render(<Home />);

      const title = screen.getByRole("heading", { level: 1 });
      const subtitle = screen.getByText(
        "Crie grátis seu cartão de visita em passos rápidos! Você o insere no Instagram e demais canais digitais."
      );

      expect(title).toBeInTheDocument();
      expect(title.innerHTML).toBe("Gerador de Cartão de Visitas");
      expect(subtitle).toBeInTheDocument();
    });

    it("should have a Form with name, phone and email input fields and a button submit", () => {
      render(<Home />);

      const inputName = screen.getByPlaceholderText("digite seu nome");
      const inputPhone = screen.getByPlaceholderText("(00) 0 0000-0000");
      const inputEmail = screen.getByPlaceholderText("nome@email.com");

      const button = screen.getByText("GERAR CARTÃO GRÁTIS");

      expect(inputName).toBeInTheDocument();
      expect(inputPhone).toBeInTheDocument();
      expect(inputEmail).toBeInTheDocument();

      expect(button).toBeInTheDocument();
    });

    it("if the submit button is clicked and the input fields is empty, should have some erros", async () => {
      render(<Home />);

      const button = screen.getByText("GERAR CARTÃO GRÁTIS");

      await userEvent.click(button);

      expect(screen.queryByText("O nome é obrigatório")).toBeInTheDocument();
      expect(
        screen.queryByText(
          "O número de telefone deve ter no mínimo 14 caracteres"
        )
      ).toBeInTheDocument();
      expect(screen.queryByText("O e-mail é obrigatório")).toBeInTheDocument();
    });

    it("if the submit button is clicked and the input fields is not empty but the values are invalid, should have some erros", async () => {
      render(<Home />);

      const inputName = screen.getByPlaceholderText("digite seu nome");
      const inputPhone = screen.getByPlaceholderText("(00) 0 0000-0000");
      const inputEmail = screen.getByPlaceholderText("nome@email.com");

      await userEvent.type(inputName, "C");
      await userEvent.type(inputPhone, "219");
      await userEvent.type(inputEmail, "cla");

      const button = screen.getByText("GERAR CARTÃO GRÁTIS");

      await userEvent.click(button);

      expect(
        screen.queryByText("O nome deve ter no mínimo 2 caracteres")
      ).toBeInTheDocument();

      expect(screen.queryByText("Número inválido")).toBeInTheDocument();

      expect(
        screen.queryByText("Formato de e-mail inválido")
      ).toBeInTheDocument();
    });

    it("if the submit button is clicked and the input fields is not empty and the values are valid, the component BusinessCard will be rendered and should have a text 'Gerar outro cartão'", async () => {
      render(<Home />);

      const inputName = screen.getByPlaceholderText("digite seu nome");
      const inputPhone = screen.getByPlaceholderText("(00) 0 0000-0000");
      const inputEmail = screen.getByPlaceholderText("nome@email.com");

      await userEvent.type(inputName, "Cláudio Cassimiro");
      await userEvent.type(inputPhone, "81993520671");
      await userEvent.type(inputEmail, "test@gmail.com");

      const button = screen.getByText("GERAR CARTÃO GRÁTIS");

      await userEvent.click(button);

      expect(await screen.findByText("Gerar outro cartão")).toBeInTheDocument();
    });
  });
});
