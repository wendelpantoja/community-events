
import { Card } from "../../components/Card";
import { eventsCards } from "../../components/ContainerEvents/events";
import { ContainerCardsDash } from "./styles";

export function EventsDash() {
    return (
        <ContainerCardsDash>
<<<<<<< HEAD
            <div className="text">
                <h2>Eventos Criados</h2>
            </div>
            <div className="container_cards">
                {eventsCards.map((dados, index) => (
                    <Card 
                    key={index}
                    img={dados.img} 
                    title={dados.title}
                    type={dados.type}
                    description={dados.description} 
                    data={dados.data} 
                    cidade={dados.cidade} 
                />
                ))}
            </div>
=======
            <ContainerEvents event="online"/>
            <ContainerEvents event="presencial"/>
>>>>>>> main
        </ContainerCardsDash>
    )
}