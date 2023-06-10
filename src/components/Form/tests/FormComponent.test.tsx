import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "../FormComponent";

describe("FormComponent", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  describe("When component form is rendered and the user clicks on submit button", () => {
    it("without filling the fields, there should be three error messages on the fields", async () => {
      const setCardData = vi.fn();

      render(<Form setCardData={setCardData} />);

      const button = screen.getByRole("button", {
        name: /GERAR CARTÃO GRÁTIS/i,
      });

      await userEvent.click(button);

      expect(screen.queryByText("O nome é obrigatório")).toBeInTheDocument();
      expect(
        screen.queryByText(
          "O número de telefone deve ter no mínimo 14 caracteres"
        )
      ).toBeInTheDocument();
      expect(screen.queryByText("O e-mail é obrigatório")).toBeInTheDocument();
    });

    it("with inputName less than two characters should have an error message with the text 'O nome deve ter no mínimo 2 caracteres'", async () => {
      const setCardData = vi.fn();

      render(<Form setCardData={setCardData} />);

      const inputName = screen.getByPlaceholderText("digite seu nome");

      await userEvent.type(inputName, "C");

      const button = screen.getByRole("button", {
        name: /GERAR CARTÃO GRÁTIS/i,
      });
      await userEvent.click(button);

      expect(
        screen.queryByText("O nome deve ter no mínimo 2 caracteres")
      ).toBeInTheDocument();
    });

    it("with inputPhone with a invalid phone number, should have an error message with the text 'Número inválido'", async () => {
      const setCardData = vi.fn();

      render(<Form setCardData={setCardData} />);

      const inputPhone = screen.getByPlaceholderText("(00) 0 0000-0000");

      await userEvent.type(inputPhone, "219");

      const button = screen.getByRole("button", {
        name: /GERAR CARTÃO GRÁTIS/i,
      });
      await userEvent.click(button);

      expect(screen.queryByText("Número inválido")).toBeInTheDocument();
    });

    it("with inputEmail with a invalid email, should have an error message with the text 'Formato de e-mail inválido'", async () => {
      const setCardData = vi.fn();

      render(<Form setCardData={setCardData} />);

      const inputEmail = screen.getByPlaceholderText("nome@email.com");

      await userEvent.type(inputEmail, "cla");

      const button = screen.getByRole("button", {
        name: /GERAR CARTÃO GRÁTIS/i,
      });
      await userEvent.click(button);

      expect(
        screen.queryByText("Formato de e-mail inválido")
      ).toBeInTheDocument();
    });

    it("with all fields filled in, the form should have no errors", async () => {
      const setCardData = vi.fn();

      render(<Form setCardData={setCardData} />);

      const inputName = screen.getByPlaceholderText("digite seu nome");
      const inputPhone = screen.getByPlaceholderText("(00) 0 0000-0000");
      const inputEmail = screen.getByPlaceholderText("nome@email.com");

      await userEvent.type(inputName, "Cláudio Cassimiro");
      await userEvent.type(inputPhone, "81993520671");
      await userEvent.type(inputEmail, "test9@gmail.com");

      const button = screen.getByRole("button", {
        name: /GERAR CARTÃO GRÁTIS/i,
      });
      await userEvent.click(button);

      expect(
        screen.queryByText("O nome é obrigatório")
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText(
          "O número de telefone deve ter no mínimo 14 caracteres"
        )
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText("O e-mail é obrigatório")
      ).not.toBeInTheDocument();
    });
  });
});
