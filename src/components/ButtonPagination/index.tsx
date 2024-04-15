import { DocumentData } from "firebase/firestore";
import { ContainerButtons } from "./styles";

interface ButtonProps {
    somaSlice: number;
    setSomaSlice: (somaSlice: number) => void;
    totalArray: number;
    totalPage: number | null;
    coutPage: number;
    setCoutPage: (coutPage: number) => void;
    dataFilter: DocumentData[] | null;
}
const limitDoc = 8;

export function ButtonPagination({ 
    somaSlice,
    setSomaSlice,
    totalArray, 
    totalPage, 
    dataFilter, 
    coutPage, 
    setCoutPage }: ButtonProps) {
    async function beforeDocuments() {
        if(dataFilter) {
            const sub = somaSlice - limitDoc
            
            if(sub < 0) {
                setSomaSlice(somaSlice)
            } else {
                setSomaSlice(sub)
                setCoutPage(coutPage - 1)
            }
        }
    }

    async function nextDocuments() {
        if(dataFilter) {
            const soma = somaSlice + limitDoc

            if(soma > totalArray) {
                setSomaSlice(somaSlice)
            } else {
                setSomaSlice(soma)
                setCoutPage(coutPage + 1)
            }
        }
    }

    return (
        <ContainerButtons>
            {coutPage > 1 ? (
                <button className="buttonShow buttonShow_right" onClick={() => beforeDocuments()}>
                    <i className='bx bx-chevron-left'></i>
                </button>
            ) : (
                <button className="buttonShow buttonShow_left">
                    <i className='bx bx-chevron-left'></i>
                </button>
            )}

            {coutPage === totalPage ? (
                <button className="buttonShow buttonShow_left">
                    <i className='bx bx-chevron-right'></i>
                </button>
            ) : (
                <button className="buttonShow buttonShow_right" onClick={() => nextDocuments()}>
                    <i className='bx bx-chevron-right'></i>
                </button>
            )}
        </ContainerButtons>
    )
}