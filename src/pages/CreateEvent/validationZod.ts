import { z } from "zod";
import { formatDate, formatHour } from "../../utils/functionsFormatDateHour";

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
    data_inicio: z.date(errorDateGlobal).transform((val) => formatDate(val)),
    data_fim: z.date(errorDateGlobal).transform((val) => formatDate(val)),
    hora_inicio: z.date(errorTimeGlobal).transform((val) => formatHour(val)),
    hora_fim: z.date(errorTimeGlobal).transform((val) => formatHour(val)),
    tipo_evento: z.string().nonempty("Por favor, selecione o tipo do evento!"),
    tipo_categoria: z.string().nonempty("Por favor, selecione uma categoria"),
})


export type TypeEvent = z.infer<typeof createEventZod>