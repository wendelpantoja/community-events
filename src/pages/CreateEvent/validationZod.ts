import { z } from "zod";

export const createEvent = z.object({
    titulo: z.string()
    .nonempty("O title é obrigatório"),
    descricao: z.string(),
    data: z.coerce.string(),
    hora: z.coerce.string(),
    tipo_evento: z.string(),
    tipo_categoria: z.string()
})


export type TypeEvent = z.infer<typeof createEvent>