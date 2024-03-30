import { z } from "zod";

export const updateEvent = z.object({
    url_imagem: z.string(),
    titulo: z.string()
    .nonempty("O title é obrigatório"),
    descricao: z.string(),
    data: z.coerce.string(),
    hora: z.coerce.string(),
    tipo_evento: z.string(),
    tipo_categoria: z.string()
})


export type TypeUpdateEvent = z.infer<typeof updateEvent>