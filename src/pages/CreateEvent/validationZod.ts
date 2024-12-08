import { z } from "zod";

const errorDateGlobal = {
    required_error: "Por favor, selecione uma data!",
    invalid_type_error: "Por favor, selecione uma data!",
}
const errorTimeGlobal = {
    required_error: "Por favor, selecione o Horário!",
    invalid_type_error: "Por favor, selecione o Horário!",
}

const customErrorMap: z.ZodErrorMap = (issue, ctx) => {
    switch (issue.code) {
        case z.ZodIssueCode.invalid_date:
            return { message: 'Valor inválido!' };
        default:
            return { message: ctx.defaultError };
    }
}

z.setErrorMap(customErrorMap)

export const createEventZod = z.object({
    titulo: z.string()
    .nonempty("Por favor, digite um título para o evento!"),
    descricao: z.string()
    .nonempty("Por favor, digite uma descrição para o evento!"),
    data_inicio: z.coerce.date(errorDateGlobal),
    data_fim: z.coerce.date(errorDateGlobal),
    hora_inicio: z.coerce.date(errorTimeGlobal),
    hora_fim: z.coerce.date(errorTimeGlobal),
    tipo_evento: z.string().nonempty("Por favor, selecione o tipo do evento!"),
    tipo_categoria: z.string().nonempty("Por favor, selecione uma categoria"),
    local: z.string().nonempty("Por favor, digite o local do evento!")
})


export type TypeEvent = z.infer<typeof createEventZod>