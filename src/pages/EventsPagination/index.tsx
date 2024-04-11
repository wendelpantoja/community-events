import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { Container } from "../../styles/GlobalStyles";
import { ContainerPagination } from "./styles";
import { DocumentData } from "firebase/firestore";
import { ButtonPagination } from "../../components/ButtonPagination";
import { usePagination } from "../../hooks/usePagination";

interface EventsFilter {
    data: DocumentData[] | null;
    valueSearch: string;
    selectEvent: string;
    selectCategory: string;
}

const limitDoc = 8

export function EventsPagination({ 
    data, 
    valueSearch,
    selectEvent, 
    selectCategory 
}: EventsFilter) {
    const [coutPage, setCoutPage] = useState(1)
    const [totalPage, setTotalPage] = useState<number | null>(null)
    const [dataFilter, setDataFilter] = useState<DocumentData[] | null>(null)
    const { getFirstSlice } = usePagination()
    const [totalArray, setTotalArray] = useState<number>(0)
    const [somaSlice, setSomaSlice] = useState<number>(0)

    useEffect(() => {
        function filter() {
            if(data) {
                const newData = getFirstSlice(data, valueSearch, selectEvent, selectCategory)
                // const totalData = totalFilter(data, valueSearch, selectEvent, selectCategory)

                if(newData) {
                    setTotalArray(newData.length)
                }
                setTotalPage(Math.round(newData.length / limitDoc))

                // const dataTeste = newData.slice(0).filter((_, index) => index < limitDoc)

                setDataFilter(newData)
            }
        }

        filter()
    }, [valueSearch, selectCategory, selectEvent])

    return (
        <Container>
            <ContainerPagination>
                {dataFilter && dataFilter?.slice(somaSlice)
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
                    setDataFilter={setDataFilter}
                    coutPage={coutPage}
                    setCoutPage={setCoutPage}
                />
            }
        </Container>
    )
}