import { useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Selected } from "../../components/Selected";
import { SearchEvents, SectionOne } from "./styles";
import { EventsPagination } from "../EventsPagination";
import { useEvent } from "../../context/EventProvider/useEvent";
import { usePagination } from "../../hooks/usePagination";
import { DocumentData } from "firebase/firestore";
import { ContainerEvents } from "../../components/ContainerEvents";
// import { ButtonPagination } from "../../components/ButtonPagination";
// import { Container } from "../../styles/GlobalStyles";

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
    const { spinEvents } = useEvent()
    const [handleSearch, setHandleSearch] = useState<string>("")
    const [selectEvent, setSelectEvent] = useState<string>("")
    const [selectCategory, setSelectCategory] = useState<string>("")

    const [data, setData] = useState<DocumentData[] | null>([])
    const { totalDocuments } = usePagination()

    useEffect(() => {
        async function pagination() {
            try {
                // const events = await getFirstDocument("Events", handleSearch)
                const totalDoc = await totalDocuments("Events")
                
                setData(totalDoc.docs)
            } catch (error) {
                console.log(error)
            } 
        }

        pagination()
    }, [])

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
                        nameSelect="Escolha uma categoria"
                        arrayOptions={typeCategory}
                        setSelectCategory={setSelectCategory}
                    />
                    <Selected 
                        nameSelect="Tipo evento"
                        arrayOptions={tipoEvento}
                        setSelectEvent={setSelectEvent}
                    />
                </div>
            </SearchEvents>

            {spinEvents && <h2>Carregando</h2>}

            {handleSearch != "" || selectCategory != "" || selectEvent != "" ? (
                <EventsPagination 
                    data={data}
                    selectEvent={selectEvent}
                    selectCategory={selectCategory}
                    valueSearch={handleSearch}
                />
            ) : (
                <>
                    <ContainerEvents event="Online"/>
                    <ContainerEvents event="Presencial"/>
                    <ContainerEvents event="Híbrido"/>
                </>
            )}

            <Footer /> 
        </>
    )
}