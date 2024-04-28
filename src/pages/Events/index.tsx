import { useEffect } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Selected } from "../../components/Selected";
import { SearchEvents, SectionOne } from "./styles";
import { useEvent } from "../../context/EventProvider/useEvent";
import { ContainerEvents } from "../../components/ContainerEvents";
import { useFilter } from "../../context/FilterProvider/useFilter";
import { EventsPagination } from "../EventsPagination";
// import { DocumentData } from "firebase/firestore";
// import { usePagination } from "../../hooks/usePagination";


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
    const { events } = useEvent()
    const { handleSpin, setHandleSpinEvent } = useEvent()
    const { handleSearch, selectEvent, selectCategory, setHandleSearch } = useFilter()

    useEffect(() => {
        async function pagination() {
            try {
                setHandleSpinEvent(true)
            } catch (error) {
                console.error(error)
            } finally {
                setHandleSpinEvent(false)
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

            {handleSpin && <h2>Carregando</h2>}
            
            {handleSearch != "" || selectCategory != "Escolha uma categoria" || selectEvent != "Tipo evento" ? (
                <EventsPagination />
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