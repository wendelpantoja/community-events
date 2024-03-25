import { z } from "zod";

export const createUserFormRegister = z.object({
    nome: z.string()
    .nonempty("Seu nome é obrigatório")
    .toLowerCase(),
    sobrenome: z.string()
    .toLowerCase(),
    email: z.string()
    .nonempty("O e-mail é obrigatório")
    .email("Formato de e-email inválido")
    .toLowerCase()
    .refine(email => {
        return email.endsWith("@gmail.com")
    }, "O e-mail precisa ser do google G-mail"),
    password: z.string()
    .min(6, "No minimo 6 caracteres"),
    passwordConfirme: z.string()
    .min(6, "No minimo 6 caracteres"),
})


export type CreateUserFormDataRegister = z.infer<typeof createUserFormRegister>