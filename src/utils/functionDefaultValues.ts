import { useEvent } from "../context/EventProvider/useEvent";
import { db } from "../services/fireBaseConfig";

export async function DefaultEvents() {
    const { idEvent, getEvent } = useEvent()
    const event = await getEvent(db, "Events", idEvent ? idEvent : "")
    return {
        titulo: event?.data().titulo,
        descricao: event?.data().descricao,
        data_inicio: new Date(event?.data().data_inicio),
        data_fim: new Date(event?.data().data_fim),
        hora_inicio: new Date(event?.data().hora_inicio),
        hora_fim: new Date(event?.data().hora_fim),
        tipo_evento: event?.data().tipo_evento,
        tipo_categoria: event?.data().tipo_categoria,
    }

}