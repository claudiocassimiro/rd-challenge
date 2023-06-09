import { z } from "zod";
import validator from "validator";

export const generateBusinessCardSchema = z.object({
  name: z
    .string()
    .nonempty("O nome é obrigatório")
    .min(2, "O nome deve ter no mínimo 2 caracteres"),
  phone: z
    .string()
    .nonempty("O número de telefone deve ter no mínimo 14 caracteres")
    .refine(
      (phone) =>
        /^(\(\d{2}\)\s\d\s\d{4}-\d{4}|\(\d{2}\)\s\d{4}-\d{4})$/.test(phone) ||
        /^\(\d{2}\)\s\d{4,5}-\d{4}$/.test(phone),
      "Número inválido"
    ),
  email: z
    .string()
    .nonempty("O e-mail é obrigatório")
    .email("Formato de e-mail inválido")
    .toLowerCase(),
});

export type generateBusinessCardData = z.infer<
  typeof generateBusinessCardSchema
>;
