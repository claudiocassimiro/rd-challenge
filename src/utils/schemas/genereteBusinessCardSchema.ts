import { z } from "zod";
import validator from "validator";

export const generateBusinessCardSchema = z.object({
  name: z
    .string()
    .nonempty("O nome é obrigatório")
    .min(2, "O nome deve ter no mínimo 2 caracteres")
    .transform((name) => {
      name
        .trim()
        .split(" ")
        .map((word) => {
          return word[0].toLocaleUpperCase().concat(word.substring(1));
        })
        .join(" ");
    }),
  phone: z
    .string()
    .nonempty("O número de telefone deve ter no mínimo 14 caracteres")
    .refine(validator.isMobilePhone),
  email: z
    .string()
    .nonempty("O e-mail é obrigatório")
    .email("Formato de e-mail inválido")
    .toLowerCase(),
});

export type generateBusinessCardData = z.infer<
  typeof generateBusinessCardSchema
>;
