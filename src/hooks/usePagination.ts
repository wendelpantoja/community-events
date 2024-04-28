import { DocumentData, collection, getDocs, limit, orderBy, query, where } from "firebase/firestore"
import { db } from "../services/fireBaseConfig"

export function usePagination() {

    // async function getLimitDocs(nameCollection: string, search?: string, typeEvent?: string, typeCategory?: string) {
    //     // if(typeEvent != "Tipo evento" && typeCategory != "Escolha uma categoria" && search != "") {
    //     //     filter.push(where('titulo', '==', search))
    //     //     filter.push(where('tipo_evento', '==', typeEvent))
    //     //     filter.push(where('tipo_categoria', '==', typeCategory))
    //     // } else if (typeEvent === "Tipo evento") {
    //     //     filter.push(where('tipo_categoria', '==', typeCategory))
    //     // } else {
    //     //     filter.push(where('tipo_evento', '==', typeEvent))
    //     // }
    // } 

    async function getFilterDoc(nameCollection: string, type: string) {
        const coll = collection(db, nameCollection)
        const q = query(coll, where('tipo_evento', '==', type), limit(9))
        const docs = await getDocs(q)

        // docs.docs.map((element) => {
        //     console.log(element)
        // })

        return docs.docs
    }

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
        getFilterDoc,
        getFirstDocument,
        totalDocuments,
        getDocuments,
        getFirstSlice,
        totalFilter
    }
}