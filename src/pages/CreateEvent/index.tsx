import { ContainerFile, ContainerForm, Label } from "./styles";
import { Controller, useForm } from "react-hook-form";
import { useState } from "react";
import { useEvent } from "../../context/EventProvider/useEvent";
import { HandleSpin } from "../../components/Spin";
// import { useAuth } from "../../context/AuthProvider/useAuth";
// import { db } from "../../services/fireBaseConfig";
import { TypeEvent } from "./validationZod";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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

// interface Event extends TypeEvent {
//     url_imagem?: string | unknown;
//     // titulo: string;
//     // descricao: string;
//     // data_inicio: Date | string;
//     // data_fim: Date;
//     // hora_inicio: string;
//     // hora_fim: string;
//     // tipo_evento: string;
//     // tipo_categoria: string
// }

// class EventObj {
//     constructor(data: Date) {
//         this.data = data
//     }
// }

export function CreateEvent() {
    // const user = useAuth()
    const { handleSpin } = useEvent()

    const { register, handleSubmit, control } = useForm<TypeEvent>();
    const [preview, setPreview] = useState('')
    const [nameImagem, setNameImagem] = useState<File>()

    async function handleEvent(data: TypeEvent) {

        // if(nameImagem) {
        //     if(user?.user) {
        //         setHandleSpinEvent(true)
        //         const urlImagem = await createUrlImage(nameImagem)
        //         try {
        //             await createEvent(db, "Events", {
        //                 user_id: user?.user?.uid, 
        //                 url_imagem: urlImagem,
        //                 ...data
        //             })
        //             setPreview('')
        //             reset()   
        //         } catch (error) {
        //             console.log(error)
        //         } finally {
        //             setHandleSpinEvent(false)
        //         }
        //     }
        // }
        // if(startDate) {
        //     const event = new EventObj(startDate)

        //     console.log(event)
        // }
        console.log(nameImagem)
        console.log(data)
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

                    {/* <div className="container_title">
                        <label htmlFor="">Título do evento</label>
                        <input 
                            className='title' 
                            type="text"
                            placeholder='Digite o título do evento'
                            {...register("titulo")}
                        />
                    </div> */}
                    
                <div className="container_description">
                    <label htmlFor="">Descrição do evento</label>
                    <textarea 
                        id="" 
                        placeholder='Descrição do evento'
                        {...register("descricao")}
                    />
                </div>

                <div className="container_date_hour">
                    <div className="container_date">
                        <label htmlFor="">Início do evento</label>
                        <Controller 
                            control={control}
                            name="data_inicio"
                            render={({ field: { onChange, onBlur, value } }) => (
                                <DatePicker 
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    selected={value}
                                />
                            )}
                        />
                    </div>

                    <div className="container_date">
                        <label htmlFor="data-fim">Fim do evento</label>
                        <Controller 
                            control={control}
                            name="data_fim"
                            render={({ field }) => (
                                <DatePicker
                                    id="data-fim" 
                                    onChange={(date) => field.onChange(date) }
                                    selected={field.value}
                                />
                            )}
                        />
                    </div>
                </div>

                <div className="container_date_hour">
                    <div className="container_hour">
                        <label htmlFor="">Horário de início</label>
                        <input type="time" {...register("hora_inicio")}/>
                    </div>
                    <div className="container_hour">
                        <label htmlFor="">Horário de encerramento </label>
                        <input type="time" {...register("hora_fim")}/>
                    </div>
                </div>

                <div className="selecteds">

                    <div className="container_select">
                        <label htmlFor="">Tipo de evento</label>
                        <select {...register("tipo_evento")} id="">

                            {typeEvent.map((option, index) => (
                                <option value={option} key={index}>{option}</option>
                            ))}

                        </select>
                    </div>

                    <div className="container_select">
                        <label htmlFor="">Categoria</label>
                        <select {...register("tipo_categoria")}  id="">

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
        </ContainerForm>
    )
}