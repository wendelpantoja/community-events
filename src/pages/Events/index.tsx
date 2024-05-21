import { useEffect } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Selected } from "../../components/Selected";
import { Banner, SearchEvents } from "./styles";
import { useEvent } from "../../context/EventProvider/useEvent";
import { ContainerEvents } from "../../components/ContainerEvents";
import { useFilter } from "../../context/FilterProvider/useFilter";
import { EventsPagination } from "../EventsPagination";
import { HandleSpin } from "../../components/Spin";

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
            <Header />
            
            <Banner>
                <div className="bg_banner">
                    <h1>Encontre os principais eventos da <br/> sua cidade</h1>
                </div>
            </Banner>

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

            {handleSpin && <HandleSpin typeColor="spin_gray"/>}
            
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