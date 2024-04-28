import { z } from "zod";

export const createEventZod = z.object({
    titulo: z.string()
    .nonempty("O title é obrigatório"),
    descricao: z.string(),
    data_inicio: z.coerce.string(),
    data_fim: z.coerce.string(),
    hora_inicio: z.coerce.string(),
    hora_fim: z.coerce.string(),
    tipo_evento: z.string(),
    tipo_categoria: z.string()
})


export type TypeEvent = z.infer<typeof createEventZod>