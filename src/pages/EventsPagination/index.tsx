import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { Container } from "../../styles/GlobalStyles";
import { ContainerPagination } from "./styles";
import { DocumentData } from "firebase/firestore";
import { ButtonPagination } from "../../components/ButtonPagination";
import { usePagination } from "../../hooks/usePagination";
import { useFilter } from "../../context/FilterProvider/useFilter";


interface EventsFilter {
    data: DocumentData[] | null;
}

const limitDoc = 8

export function EventsPagination({ data }: EventsFilter) {
    const { handleSearch, selectCategory, selectEvent } = useFilter()
    const [coutPage, setCoutPage] = useState(1)
    const [totalPage, setTotalPage] = useState<number | null>(null)
    const [dataFilter, setDataFilter] = useState<DocumentData[] | null>(null)
    const { getFirstSlice } = usePagination()
    const [totalArray, setTotalArray] = useState<number>(0)
    const [somaSlice, setSomaSlice] = useState<number>(0)

    useEffect(() => {
        function filter() {
            if(data) {
                const newData = getFirstSlice(data, handleSearch, selectEvent, selectCategory)

                if(newData) {
                    setTotalArray(newData.length)
                }
                
                setTotalPage(Math.round(newData.length / limitDoc))
                setDataFilter(newData)
            }
        }

        filter()
    }, [handleSearch, selectCategory, selectEvent])

    return (
        <Container>
            <ContainerPagination>
                {dataFilter?.slice(somaSlice)
                .filter((_, index) => index < limitDoc)
                .map((event) => (
                    <Card key={event.id} data={event} />
                ))}
            </ContainerPagination>
            {totalPage != null && totalPage > 1 && 
                <ButtonPagination
                    somaSlice={somaSlice}
                    setSomaSlice={setSomaSlice}
                    totalArray={totalArray}
                    totalPage={totalPage}
                    dataFilter={dataFilter} 
                    coutPage={coutPage}
                    setCoutPage={setCoutPage}
                />
            }
        </Container>
    )
}