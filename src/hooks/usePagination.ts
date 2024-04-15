import { DocumentData, collection, getDocs, limit, orderBy, query, where } from "firebase/firestore"
import { db } from "../services/fireBaseConfig"

export function usePagination() {

    async function getFirstDocument(nameCollection: string,  type: string) {
       const coll = collection(db, nameCollection)
       const first = query(coll, where("titulo", "==", type), orderBy("titulo"))
       const documentSnapshots = await getDocs(first)
       return documentSnapshots
    }

    async function totalDocuments(nameCollection: string) {
        const coll = collection(db, nameCollection)
        const first = query(coll, orderBy("titulo"))
        const documentSnapshots = await getDocs(first)

        return documentSnapshots
    }

    async function getDocuments(nameCollection: string) {
        const coll = collection(db, nameCollection)
        const first = query(coll, orderBy("titulo"), limit(8))
        const documentSnapshots = await getDocs(first)

        return documentSnapshots
    }

    function getFirstSlice(data: DocumentData[], valueSearch: string, selectEvent: string, selectCategory: string) {
        const newSelectEvent = selectEvent === "Tipo evento" ? "" : selectEvent;
        const newSelectCategory = selectCategory === "Escolha uma categoria" ? "" : selectCategory;
        const newData = data?.filter(event => event.data().titulo.toLowerCase().includes(valueSearch))
                .filter(event => event.data().tipo_evento.includes(newSelectEvent))
                .filter(event => event.data().tipo_categoria.includes(newSelectCategory))
                .map((event) => {return event})

            return newData
    }

    function totalFilter(data: DocumentData[], valueSearch: string, selectEvent: string, selectCategory: string) {
            const totalFilter = data?.filter(event => event.data().titulo.toLowerCase().includes(valueSearch))
                .filter(event => event.data().tipo_evento.includes(selectEvent))
                .filter(event => event.data().tipo_categoria.includes(selectCategory))
                .map((event) => {return event})

            return totalFilter
    }

    return {
        getFirstDocument,
        totalDocuments,
        getDocuments,
        getFirstSlice,
        totalFilter
    }
}