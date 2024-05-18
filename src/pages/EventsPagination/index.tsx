import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { Container } from "../../styles/GlobalStyles";
import { ContainerPagination } from "./styles";
import { DocumentData } from "firebase/firestore";
import { ButtonPagination } from "../../components/ButtonPagination";
import { useEvent } from "../../context/EventProvider/useEvent";
import { usePagination } from "../../hooks/usePagination";
import { useFilter } from "../../context/FilterProvider/useFilter";

const limitDoc = 8

export function EventsPagination() {
    const {events} = useEvent()
    const { getFirstSlice } = usePagination()
    const {handleSearch, selectEvent, selectCategory} = useFilter()
    const [coutPage, setCoutPage] = useState(1)
    const [totalPage, setTotalPage] = useState<number | null>(null)
    const [totalArray, setTotalArray] = useState<number>(0)
    const [somaSlice, setSomaSlice] = useState<number>(0)
    const [filter, setFilter] = useState<DocumentData[] | null>([])

    useEffect(() => {
        function filter() {
            if(events) {
                setTotalArray(events?.length)
                const filter = getFirstSlice(events, handleSearch, selectEvent, selectCategory)
                setTotalPage(Math.round(filter?.length / limitDoc))
                if(filter) {
                    setFilter(filter)
                }
            }
        }

        filter()
    }, [handleSearch, selectEvent, selectCategory])
    
    return (
        <Container>
            {filter?.length === 0 && (
                <div className="container_h3">
                    <h3>Não há eventos</h3>
                </div>
            ) }
            <ContainerPagination>
                {filter?.slice(somaSlice)
                .filter((_, index) => index < limitDoc)
                .map((event) => (
                    <Card key={event.id} data={event} />
                ))}
            </ContainerPagination>
            <ButtonPagination
                    somaSlice={somaSlice}
                    setSomaSlice={setSomaSlice}
                    totalArray={totalArray}
                    totalPage={totalPage}
                    dataFilter={filter} 
                    coutPage={coutPage}
                    setCoutPage={setCoutPage}
                />
            {totalPage != null && totalPage > 1 && 
                <ButtonPagination
                    somaSlice={somaSlice}
                    setSomaSlice={setSomaSlice}
                    totalArray={totalArray}
                    totalPage={totalPage}
                    dataFilter={filter} 
                    coutPage={coutPage}
                    setCoutPage={setCoutPage}
                />
            }
        </Container>
    )
}