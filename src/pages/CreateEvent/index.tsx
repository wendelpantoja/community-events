import { ContainerContent } from "./styles";
import { useAuth } from "../../context/AuthProvider/useAuth";
import { db } from "../../services/fireBaseConfig";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TypeEvent, createEventZod } from "./validationZod";
import { useState } from "react";
import { UploadComponent } from "../../components/Upload";
import { useEvent } from "../../context/EventProvider/useEvent";

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

interface Event {
    url_imagem: string;
    titulo: string;
    descricao: string;
    data: string;
    hora: string;
    tipo_evento: string;
    tipo_categoria: string
}

export function CreateEvent() {
    const user = useAuth()

    const { createEvent } = useEvent()

    const { register, handleSubmit, reset, formState: { errors } } = useForm<TypeEvent>({
        resolver: zodResolver(createEventZod)
    });

    const [urlImagem, setUrlImagem] = useState({
        url_imagem: "",
    })

    async function addEvent(event: Event) {
        if(user?.user) {

            try {
                await createEvent(db, "Events", {
                    user_id: user?.user?.uid, 
                    ...event
                })
                reset()   
            } catch (error) {
                console.log(error)
            }
            
        }
    }

    function handleEvent(data: TypeEvent) {

        addEvent({
            ...urlImagem,
            ...data,
        })
        
    }

    return (
        <ContainerContent>
            <h2>Criar evento</h2>
            <form onSubmit={handleSubmit(handleEvent)}>
                <div className="container_inputs">
                    <UploadComponent 
                        setUrlImagem={setUrlImagem}
                    /> 

                    <input 
                        className='title' 
                        type="text"
                        placeholder='Digite o título do evento'
                        {...register("titulo")}
                    />
                    
                    <textarea 
                        id="" 
                        placeholder='Descrição do evento'
                        {...register("descricao")}
                    />

                    <div className="container_date_hour">
                        <input 
                            type="date" 
                            {...register("data")}
                        />

                        <input 
                            type="time"
                            {...register("hora")}
                        />
                    </div>
                </div>

                <div className="selecteds">
                    <select {...register("tipo_evento")} id="">

                        {typeEvent.map((option, index) => (
                            <option value={option} key={index}>{option}</option>
                        ))}

                    </select>

                    <select {...register("tipo_categoria")}  id="">

                        {categories.map((option, index) => (
                            <option value={option} key={index}>{option}</option>
                        ))}

                    </select>
                </div>
                <button type="submit">Criar Evento</button>
            </form>
        </ContainerContent>
    )
}