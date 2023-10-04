import { z } from "zod";

export const createUserFormRegister = z.object({
    email: z.string()
    .nonempty("O e-mail é obrigatorio")
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