import { Card } from "../../components/Card";
import { ContainerCardsDash } from "./styles";
import { useEvent } from "../../context/EventProvider/useEvent";

export function EventsDash() {
    const events = useEvent()

    return (
        <>
            <ContainerCardsDash>
                <div className="text">
                    <h2>Eventos Criados</h2>
                </div>
                <div className="container_cards">
                    {events?.eventsUser && <Card dataUser={events?.eventsUser} />}
                    {events?.events?.length === 0 && <h2>Nenhum evento cadastrado</h2> }
                </div>
            </ContainerCardsDash>
        </>
    )
}