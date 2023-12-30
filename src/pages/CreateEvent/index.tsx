import { UploadComponent } from "../../components/Upload";
import { ContainerContent } from "./styles";

const typeEvent = [
    "Online",
    "Híbrido",
    "Presencial"
]

const categories = [
    "Saúde",
    "Tecnologia",
    "Desenvolvimento",
]

export function CreateEvent() {
    return (
        <ContainerContent>
            <h2>Criar evento</h2>
            <div className="container_inputs">
                <UploadComponent />
                <input className='title' type="text" placeholder='Digite o título do evento'/>
                <textarea name="" id="" placeholder='Descrição do evento'></textarea>
                <div className="container_date_hour">
                    <input type="date" />
                    <input type="time"/>
                </div>
            </div>
            <div className="selecteds">
                <select name="" id="">
                    <option value="Evento" disabled>Evento</option>
                    {typeEvent.map((option, index) => (
                        <option value="" key={index}>{option}</option>
                    ))}
                </select>
                <select name="" id="">
                    <option value="Categoria" disabled>Categoria</option>
                    {categories.map((option, index) => (
                        <option value="" key={index}>{option}</option>
                    ))}
                </select>
            </div>
            <button>Criar Evento</button>
        </ContainerContent>
    )
}