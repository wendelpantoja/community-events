import { ContainerFile, ContainerForm, Label } from "./styles";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useEvent } from "../../context/EventProvider/useEvent";
import { HandleSpin } from "../../components/Spin";
import { useAuth } from "../../context/AuthProvider/useAuth";
import { db } from "../../services/fireBaseConfig";
import { createEventZod, TypeEvent } from "./validationZod";
import { TextFieldComponent } from "../../components/TextFieldComponent";
import { DateFieldComponent } from "../../components/DateFieldComponent";
import { TimeFieldComponent } from "../../components/TimeFieldComponent";
import { SelectComponent } from "../../components/SelectComponent";
import { zodResolver } from "@hookform/resolvers/zod";
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

export function CreateEvent() {
    const user = useAuth()
    const { 
        createEvent,
        createUrlImage,
        handleSpin,
        setHandleSpinEvent,
    } = useEvent()

    const { handleSubmit, control, formState: { errors }, reset } = useForm<TypeEvent>({
        mode: "all",
        defaultValues: {
            titulo: "",
            descricao: "",
            data_inicio: undefined,
            data_fim: undefined,
            hora_inicio: undefined,
            hora_fim: undefined,
            tipo_evento: "",
            tipo_categoria: "",
            local: "",
        }, 
        resolver: zodResolver(createEventZod)
    });
    const [preview, setPreview] = useState('')
    const [nameImagem, setNameImagem] = useState<File>()

    async function handleEvent(data: TypeEvent) {
        const newData = transformData(data)
        if(nameImagem) {
            if(user?.user) {
                setHandleSpinEvent(true)
                const urlImagem = await createUrlImage(nameImagem)
                try {
                    await createEvent(db, "Events", {
                        user_id: user?.user?.uid, 
                        url_imagem: urlImagem,
                        ...newData
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
        <ContainerForm>

            <h2>Crie um evento</h2>

            <form onSubmit={handleSubmit(handleEvent)}>
                    
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

<<<<<<< HEAD
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
=======
                <div className="container_title">
                    <label htmlFor="title" id="label">Título do evento</label>
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
                    <label htmlFor="description" id="label">Descrição do evento</label>
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
                        <label htmlFor="" id="label">Início do evento</label>
                        <DateFieldComponent 
                            label="dd/mm/yyyy"
                            control={control}
                            name="data_inicio"
                            error={errors.data_inicio?.message}
                        />
                    </div>

                    <div className="container_date">
                        <label htmlFor="data-fim" id="label">Fim do evento</label>
                        <DateFieldComponent 
                            label="dd/mm/yyyy"
                            control={control}
                            name="data_fim"
                            error={errors.data_fim?.message}
                        />
>>>>>>> release/0.2
                    </div>
                </div>

<<<<<<< HEAD
                    <div className="container_date_hour">
                        <div className="container_hour">
                            <label htmlFor="start-event">Horário de início</label>
                            <input id="start-event" type="time" {...register("hora_inicio")}/>
                        </div>
                        <div className="container_hour">
                            <label htmlFor="finish-event">Horário de encerramento </label>
                            <input id="finish-event" type="time" {...register("hora_fim")}/>
                        </div>
=======
                <div className="container_date_hour">
                    <div className="container_hour">
                        <label htmlFor="" id="label">Horário de início</label>
                        <TimeFieldComponent 
                            label="hh:mm aa"
                            control={control}
                            name="hora_inicio"
                            error={errors.hora_inicio?.message}
                        />
                    </div>
                    <div className="container_hour">
                        <label htmlFor="" id="label">Horário de encerramento </label>
                        <TimeFieldComponent 
                            label="hh:mm aa"
                            control={control}
                            name="hora_fim"
                            error={errors.hora_fim?.message}
                        />
>>>>>>> release/0.2
                    </div>
                </div>

                <div className="selecteds">

                    <div className="container_select">
<<<<<<< HEAD
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
=======
                        <label htmlFor="" id="label">Tipo de evento</label>
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
                        <label htmlFor="" id="label">Tipo Categoria</label>
                        <SelectComponent 
                            label="Tipo categoria"
                            control={control}
                            name="tipo_categoria"
                            idLabel="tipo-categoria"
                            error={errors.tipo_categoria?.message}
                            arrayMenuItem={categories}
                        />
>>>>>>> release/0.2
                    </div>

                </div>

                <div className="container_local">
                    <label htmlFor="local" id="label">Local do Evento</label>
                    <TextFieldComponent 
                        id="local"
                        label="Rua, bairro, numero..."
                        variant="outlined"
                        name="local"
                        control={control}
                        error={errors.titulo?.message}
                        multiline={false}
                    />
                </div>

                <div className="container_button">
                    <button type="submit">
                        {handleSpin && <HandleSpin typeColor="spin_violet"/>}
                        {!handleSpin && <p>Criar evento</p>}
                    </button>
                </div>
            </form>
        </ContainerForm>
    )
}