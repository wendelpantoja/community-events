
export function CreateEvent() {
    return (
        <div className="container_content">
            <h2>Criar evento</h2>
            <div className="container_inputs">
                <input className='title' type="text" placeholder='Digite o título do evento'/>
                <textarea name="" id="" placeholder='Descrição do evento'></textarea>
                <div className="container_date_hour">
                    <input type="date" />
                    <input type="time"/>
                </div>
                <input className='file' type="file" />
            </div>
            <button>Criar Evento</button>
        </div>
    )
}