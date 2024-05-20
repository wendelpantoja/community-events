import { ContainerContent, ContainerFile, Label } from "./styles";
import { db } from "../../services/fireBaseConfig";
import { useEffect, useState } from "react";
import { useEvent } from "../../context/EventProvider/useEvent";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthProvider/useAuth";
import { HandleSpin } from "../../components/Spin";
import { useNavigate } from "react-router-dom";

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


export function FormUpdate() {
    const user = useAuth()
    const { 
        idEvent, 
        getEvent, 
        createUrlImage,
        handleSpin,
        setHandleSpinEvent,
        updateEvent
    } = useEvent()

    const { register, handleSubmit, reset, setValue } = useForm<Event>();
    const [preview, setPreview] = useState("")
    const [nameImagem, setNameImagem] = useState<File | null>(null)
    const navigate = useNavigate()

    useEffect(() => {
        async function handleUpdate() {
            if(idEvent) {
                const event = await getEvent(db, "Events", idEvent)
                setPreview(event?.data()?.url_imagem)
                setValue("titulo", event?.data().titulo)
                setValue("descricao", event?.data().descricao)
                setValue("data_inicio", event?.data().data_inicio)
                setValue("data_fim", event?.data().data_fim)
                setValue("hora_inicio", event?.data().hora_inicio)
                setValue("hora_fim", event?.data().hora_fim)
                setValue("tipo_evento", event?.data().tipo_evento)
                setValue("tipo_categoria", event?.data().tipo_categoria)
            }
        }
        handleUpdate()
    }, [])

    async function onSubmit(data: Event) {
        if(nameImagem === null) {
            if(user?.user) {
                if(idEvent) {

                    setHandleSpinEvent(true)
                    try {
                        await updateEvent(db, "Events", idEvent, {
                            user_id: user?.user?.uid,
                            url_imagem: preview,
                            ...data
                        })
                        setPreview("")
                        reset()
                        navigate("/dashboard/events-dash")
                    } catch (error) {   
                        console.log(error)
                    } finally {
                        setHandleSpinEvent(false)
                    }

                }
            }
        }

        if(nameImagem) {
            if(user?.user) {
                if(idEvent) {

                    setHandleSpinEvent(true)
                    const urlImagem = await createUrlImage(nameImagem)
                    try {
                        await updateEvent(db, "Events", idEvent, {
                            user_id: user?.user?.uid, 
                            url_imagem: urlImagem,
                            ...data
                        })
                        navigate("/dashboard/events-dash")
                    } catch (error) {
                        console.log(error)
                    } finally {
                        setHandleSpinEvent(false)
                    }

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

            <h2>Atualizar evento</h2>

            <form onSubmit={handleSubmit(onSubmit)}>

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
                            {...register("data_inicio")}
                        />

                        <input 
                            type="date" 
                            {...register("data_fim")}
                        />
                    </div>

                    <div className="container_date_hour">
                        <input type="time" {...register("hora_inicio")}/>
                        <input type="time" {...register("hora_fim")}/>
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

                <button type="submit">
                    {handleSpin && <HandleSpin colorPrimary="#DBE2FF" colorContainer="#6E72FF"/>}
                    {!handleSpin && <p>Criar evento</p>}
                </button>
            </form>
        </ContainerContent>
    )
}