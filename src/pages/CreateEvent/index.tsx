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
    url_imagem?: string;
    titulo: string;
    descricao: string;
    data: string;
    hora: string;
    tipo_evento: string;
    tipo_categoria: string
}

export function CreateEvent() {
    const user = useAuth()
    const { handleSpin, createEvent, createUrlImage, setHandleSpinEvent } = useEvent()

    const { register, handleSubmit, reset, formState: { errors } } = useForm<Event>();
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
            <h2>Criar evento</h2>
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
                <button type="submit">
                    {handleSpin && <HandleSpin />}
                    {!handleSpin && <p>Criar evento</p> }
                </button>
            </form>
        </ContainerContent>
    )
}