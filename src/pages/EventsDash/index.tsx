
import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { ContainerCardsDash } from "./styles";
import { QuerySnapshot, collection, getDocs } from "firebase/firestore";
import { db } from "../../services/fireBaseConfig";
import { useAuth } from "../../context/useAuth";

export function EventsDash() {
    const user = useAuth()
    const [data, setData] = useState<QuerySnapshot | null>(null)

    useEffect(() => {
        async function handleEvents() {
            try {
                const querySnapshot = await getDocs(collection(db, "Events"))
                setData(querySnapshot)
            } catch (error) {   
                console.log(error)
            }
        }
        handleEvents()
    }, [])

    return (
        <ContainerCardsDash>
            <div className="text">
                <h2>Eventos Criados</h2>
            </div>
            <div className="container_cards">
                {data && <Card uid={user?.user?.uid} data={data} />}
                {data?.docs.length === 0 && <h2>Nenhum evento cadastrado</h2> }
            </div>
        </ContainerCardsDash>
    )
}