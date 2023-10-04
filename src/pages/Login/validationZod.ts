import { z } from "zod";

export const createUserFormLogin = z.object({
    email: z.string()
    .nonempty("O e-mail é obrigatorio")
    .email("Formato de e-email inválido"),
    password: z.string()
    .min(6, "No minimo 6 caracteres"),
})

export type CreateUserFormDataLogin = z.infer<typeof createUserFormLogin>