import { ContainerForm, ContainerFile, Label } from "./styles";
import { db } from "../../services/fireBaseConfig";
import { useState } from "react";
import { useEvent } from "../../context/EventProvider/useEvent";
import { useForm } from "react-hook-form";
import { HandleSpin } from "../../components/Spin";
import { useNavigate } from "react-router-dom";
import { TextFieldComponent } from "../../components/TextFieldComponent";
import { DateFieldComponent } from "../../components/DateFieldComponent";
import { TimeFieldComponent } from "../../components/TimeFieldComponent";
import { SelectComponent } from "../../components/SelectComponent";
import { zodResolver } from "@hookform/resolvers/zod";
import { TypeUpdateEvent, updateEventZod } from "./validationZod";
import { useAuth } from "../../context/AuthProvider/useAuth";
import { transformData } from "../../utils/functionTrasnformeData";

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

export interface Event {
    url_imagem?: string | unknown;
    titulo: string;
    descricao: string;
    data_inicio: Date;
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
        createUrlImage,
        handleSpin,
        setHandleSpinEvent,
        updateEvent,
        getEvent
    } = useEvent()
    const [preview, setPreview] = useState("")
    const { control, handleSubmit, reset, formState: { errors } } = useForm<TypeUpdateEvent>({
        mode: "all",
        defaultValues: async () => {
                const event = await getEvent(db, "Events", idEvent ? idEvent : "")
                setPreview(event?.data()?.url_imagem)
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
        },
        resolver: zodResolver(updateEventZod)
    });
    const [nameImagem, setNameImagem] = useState<File | null>(null)
    const navigate = useNavigate()

    async function onSubmit(data: TypeUpdateEvent) {
        const newData = transformData(data)
        if(nameImagem === null) {
            if(user?.user) {
                if(idEvent) {

                    setHandleSpinEvent(true)
                    try {
                        await updateEvent(db, "Events", idEvent, {
                            user_id: user?.user?.uid,
                            url_imagem: preview,
                            ...newData
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
        <ContainerForm>

            <h2>Crie um evento</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                    
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
                    <TextFieldComponent 
                        id="title"
                        label="Digite o título do evento"
                        variant="outlined"
                        name="titulo"
                        control={control}
                        error={errors.titulo?.message}
                        multiline={false}
                    />
                </div>
                    
                <div className="container_description">
                    <label htmlFor="description">Descrição do evento</label>
                    <TextFieldComponent 
                        id="description"
                        label="Digite a descrição do evento"
                        variant="outlined"
                        name="descricao"
                        control={control}
                        error={errors.descricao?.message}
                        multiline={true}
                        rows={8}
                    />
                </div>

                <div className="container_date_hour">
                    <div className="container_date">
                        <label htmlFor="">Início do evento</label>
                        <DateFieldComponent 
                            label="dd/mm/yyyy"
                            control={control}
                            name="data_inicio"
                            error={errors.data_inicio?.message}
                        />
                    </div>

                    <div className="container_date">
                        <label htmlFor="data-fim">Fim do evento</label>
                        <DateFieldComponent 
                            label="dd/mm/yyyy"
                            control={control}
                            name="data_fim"
                            error={errors.data_fim?.message}
                        />
                    </div>
                </div>

                <div className="container_date_hour">
                    <div className="container_hour">
                        <label htmlFor="">Horário de início</label>
                        <TimeFieldComponent 
                            label="hh:mm aa"
                            control={control}
                            name="hora_inicio"
                            error={errors.hora_inicio?.message}
                        />
                    </div>
                    <div className="container_hour">
                        <label htmlFor="">Horário de encerramento </label>
                        <TimeFieldComponent 
                            label="hh:mm aa"
                            control={control}
                            name="hora_fim"
                            error={errors.hora_fim?.message}
                        />
                    </div>
                </div>

                <div className="selecteds">

                    <div className="container_select">
                        <label htmlFor="">Tipo de evento</label>
                        <SelectComponent 
                            label="Tipo evento"
                            control={control}
                            name="tipo_evento"
                            idLabel="tipo-evento"
                            error={errors.tipo_evento?.message}
                            arrayMenuItem={typeEvent}
                        />
                    </div>

                    <div className="container_select">
                        <label htmlFor="">Tipo Categoria</label>
                        <SelectComponent 
                            label="Tipo categoria"
                            control={control}
                            name="tipo_categoria"
                            idLabel="tipo-categoria"
                            error={errors.tipo_categoria?.message}
                            arrayMenuItem={categories}
                        />
                    </div>
                </div>

                <div className="container_button">
                    <button type="submit">
                        {handleSpin && <HandleSpin typeColor="spin_violet"/>}
                        {!handleSpin && <p>Atualizar evento</p>}
                    </button>
                </div>
            </form>
        </ContainerForm>
    )
}