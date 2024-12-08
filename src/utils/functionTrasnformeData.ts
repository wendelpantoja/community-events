import { TypeEvent } from "../pages/CreateEvent/validationZod";

export function transformData(data: TypeEvent) {
    const newData = {
        titulo: data.titulo,
        descricao: data.descricao,
        data_inicio: new Date(data.data_inicio).toString(),
        data_fim: new Date(data.data_fim).toString(),
        hora_inicio: new Date(data.hora_inicio).toString(),
        hora_fim: new Date(data.hora_fim).toString(),
        tipo_evento: data.tipo_evento,
        tipo_categoria: data.tipo_categoria,
    }
    
    return newData
    
}