import { ContainerContent, ContainerFile, Label } from "./styles";
import { useAuth } from "../../context/AuthProvider/useAuth";
import { db } from "../../services/fireBaseConfig";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useEvent } from "../../context/EventProvider/useEvent";
import { HandleSpin } from "../../components/Spin";

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
    url_imagem?: string | unknown;
    titulo: string;
    descricao: string;
    data_inicio: string;
    data_fim: string;
    hora_inicio: string;
    hora_fim: string;
    tipo_evento: string;
    tipo_categoria: string
}

export function CreateEvent() {
    const user = useAuth()
    const { handleSpin, createEvent, createUrlImage, setHandleSpinEvent } = useEvent()

    const { register, handleSubmit, reset } = useForm<Event>();
    const [preview, setPreview] = useState('')
    const [nameImagem, setNameImagem] = useState<File>()

    async function handleEvent(data: Event) {

        if(nameImagem) {
            if(user?.user) {
                setHandleSpinEvent(true)
                const urlImagem = await createUrlImage(nameImagem)
                try {
                    await createEvent(db, "Events", {
                        user_id: user?.user?.uid, 
                        url_imagem: urlImagem,
                        ...data
                    })
                    setPreview('')
                    reset()   
                } catch (error) {
                    console.log(error)
                } finally {
                    setHandleSpinEvent(false)
                }
            }
        }

    }

    function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {

        const file = event.target.files

        if(file) {
            setPreview(URL.createObjectURL(file[0]))
            setNameImagem(file[0])
        }

    }

    return (
        <ContainerContent>

            <h2>Crie um evento</h2>

            <form onSubmit={handleSubmit(handleEvent)}>

                <div className="container_inputs">
                    
                    <ContainerFile>

                        <Label htmlFor="file">
                            {preview != '' && <img className="preview_image" src={preview} alt="" />}
                            {preview === '' && <i className='bx bx-cloud-upload'></i>}
                        </Label>

                        <input 
                            id="file"
                            type="file" 
                            onChange={handleOnChange}
                        />

                    </ContainerFile> 

                    <div className="container_title">
                        <label htmlFor="title">Título do evento</label>
                        <input 
                            id="title"
                            className='title' 
                            type="text"
                            placeholder='Digite o título do evento'
                            {...register("titulo")}
                        />
                    </div>
                    
                    <div className="container_description">
                        <label htmlFor="description">Descrição do evento</label>
                        <textarea 
                            id="description" 
                            placeholder='Descrição do evento'
                            {...register("descricao")}
                        />
                    </div>

                    <div className="container_date_hour">
                        <div className="container_date">
                            <label htmlFor="init-event">Início do evento</label>
                            <input 
                                id="init-event"
                                type="date" 
                                {...register("data_inicio")}
                            />
                        </div>

                        <div className="container_date">
                            <label htmlFor="finish-event">Fim do evento</label>
                            <input
                                id="finish-event" 
                                type="date" 
                                {...register("data_fim")}
                            />
                        </div>
                    </div>

                    <div className="container_date_hour">
                        <div className="container_hour">
                            <label htmlFor="start-event">Horário de início</label>
                            <input id="start-event" type="time" {...register("hora_inicio")}/>
                        </div>
                        <div className="container_hour">
                            <label htmlFor="finish-event">Horário de encerramento </label>
                            <input id="finish-event" type="time" {...register("hora_fim")}/>
                        </div>
                    </div>

                </div>

                <div className="selecteds">

                    <div className="container_select">
                        <label htmlFor="type-event">Tipo de evento</label>
                        <select itemID="type-event" {...register("tipo_evento")} id="type-event">

                            {typeEvent.map((option, index) => (
                                <option value={option} key={index}>{option}</option>
                            ))}

                        </select>
                    </div>

                    <div className="container_select">
                        <label htmlFor="category">Categoria</label>
                        <select {...register("tipo_categoria")}  id="category">

                        {categories.map((option, index) => (
                            <option value={option} key={index}>{option}</option>
                        ))}

                        </select>
                    </div>

                </div>

                <div className="container_button">
                    <button type="submit">
                        {handleSpin && <HandleSpin typeColor="spin_violet"/>}
                        {!handleSpin && <p>Criar evento</p>}
                    </button>
                </div>
            </form>
        </ContainerContent>
    )
}