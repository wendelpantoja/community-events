import { ContainerEvents } from "../../components/ContainerEvents";
import { ContainerCardsDash } from "./styles";

export function EventsDash() {
    return (
        <ContainerCardsDash>
            <ContainerEvents event="online"/>
            <ContainerEvents event="presencial"/>
        </ContainerCardsDash>
    )
}