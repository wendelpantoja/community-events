import { ContainerCardsDash } from "./styles";
import { useAuth } from "../../context/AuthProvider/useAuth";
import { useEffect, useState } from "react";
import { DocumentData } from "firebase/firestore";
import { useEvent } from "../../context/EventProvider/useEvent";
import { db } from "../../services/fireBaseConfig";
import { Card } from "../../components/Card";

export function EventsDash() {
    const { user } = useAuth()
    const { getEvents } = useEvent() 
    const [eventsUser, setEventsUser] = useState<DocumentData[] | null>(null)

    useEffect(() => {
        async function handleEvents() {
            if(user) {
                const events = await getEvents(db, "Events")
                const eventsUser = events.docs.filter((event) => event.data().user_id === user?.uid)
                setEventsUser(eventsUser)
            }
        }

        handleEvents()
    }, [])

    return (
        <>
            <ContainerCardsDash>
                <div className="text">
                    <h2>Eventos Criados</h2>
                </div>
                <div className="container_cards">
                    {eventsUser && <Card dataUser={eventsUser} />}
<<<<<<< HEAD
                    {eventsUser?.length === 0 && <h4>Nenhum evento cadastrado</h4> }
=======
                    {eventsUser?.length === 0 && <h2>Nenhum evento cadastrado</h2>}
>>>>>>> release/0.2
                </div>
            </ContainerCardsDash>
        </>
    )
}