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
                        {!handleSpin && <p>Criar evento</p>}
                    </button>
                </div>
            </form>
        </ContainerForm>
    )
}