import { useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Selected } from "../../components/Selected";
import { SearchEvents, SectionOne } from "./styles";
import { EventsPagination } from "../EventsPagination";
import { useEvent } from "../../context/EventProvider/useEvent";
import { DocumentData } from "firebase/firestore";
import { ContainerEvents } from "../../components/ContainerEvents";
import { useFilter } from "../../context/FilterProvider/useFilter";


const tipoEvento = [
    "Online",
    "Presencial",
    "Híbrido"
]

const typeCategory = [
    "Educação",
    "Tecnologia",
    "Desenvolvimento",
    "Saúde" 
]


export function Events() {
    const { events, spinEvents } = useEvent()
    const { handleSearch, selectEvent, selectCategory, setHandleSearch } = useFilter()

    const [data, setData] = useState<DocumentData[] | null>([])

    useEffect(() => {
        async function pagination() {
            try {
                if(events)
                setData(events)
            } catch (error) {
                console.log(error)
            } 
        }

        pagination()
    }, [events])

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setHandleSearch(event.target.value)
    }

    return(
        <>
            <SectionOne>
                <Header />
                <div className="container_text">
                    <h2>
                        Encontre os principais eventos da sua cidade
                    </h2>
                </div>
            </SectionOne>
            <SearchEvents>
                <div className="search">
                    <i className='bx bx-search-alt-2'></i>
                    <input type="text" name="search" placeholder="Pesquisar eventos" onChange={handleChange}/>
                </div>

                <div className="container_select">
                    <Selected  
                        typeSelect="category"
                        arrayOptions={typeCategory}
                    />
                    <Selected
                        typeSelect="event"
                        arrayOptions={tipoEvento}
                    />
                </div>
            </SearchEvents>

            {spinEvents && <h2>Carregando</h2>}
            {/* {handleSearch != "" && <EventsPagination data={data}/>} */}
            
            {handleSearch != "" || selectCategory != "Escolha uma categoria" || selectEvent != "Tipo evento" ? (
                <EventsPagination data={data}/>
            ) : (
                <>
                    <ContainerEvents nameEvent="Online"/>
                    <ContainerEvents nameEvent="Presencial"/>
                    <ContainerEvents nameEvent="Híbrido"/>
                </>
            )}

            <Footer /> 
        </>
    )
}