import { createContext, useEffect, useState, } from "react";
import { EventProps, IEventProvider, IcontextEvent } from "./types";
import { DocumentData, Firestore, addDoc, collection, deleteDoc, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { useAuth } from "../AuthProvider/useAuth";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../../services/fireBaseConfig";

export const EventContext = createContext<IcontextEvent>({} as IcontextEvent)

export function EventProvider({ children }: IEventProvider) {
    const { user, notificationGlobal } = useAuth()
    const [idEvent, setIdEvent] = useState("")
    const [handleSpin, setHandleSpin] = useState(false)
    const [events, setEvents] = useState<DocumentData[] | null>(null)

    useEffect(() => {
        async function handleProducts() {
            if(!user) {
                const events = await getEvents(db, "Events")
                setEvents(events.docs)
            }
        }

        handleProducts()
    }, [user, !user])

    function setHandleIdEvent(uid: string) {
        setIdEvent(uid)
    }

    function setHandleSpinEvent(valeu: boolean) {
        setHandleSpin(valeu)
    }

    async function createUrlImage(fileList: File) {

        if(fileList) {
            return new Promise(function resolverPromise(resolver, reject) {
                const storageRef = ref(storage, `images/${fileList.name}`)
                const uploadTask = uploadBytesResumable(storageRef, fileList)

                uploadTask.on('state_changed', 
                    (snapshot) => {
                        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                        console.log('Upload is ' + progress + '% done')
                    },
                    (error) => {
                        console.log(error)
                    },
                    async () => {
                        const url = await getDownloadURL(uploadTask.snapshot.ref)
                        return resolver(url)
                    }
                )
            })
        }

    }

    async function getEvents(dataBase: Firestore, nameCollection: string) {
        const querySnapshot = await getDocs(collection(dataBase, nameCollection));
        
        return querySnapshot
    }
    
    async function getEvent(dataBase: Firestore, nameCollection: string, idDocument: string) {
        const docRef = doc(dataBase, nameCollection, idDocument);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap
        } else {
            return null
        }

    }

    async function createEvent(dataBase: Firestore, nameCollection: string, event: EventProps) {
        try {
            await addDoc(collection(dataBase, nameCollection), event);
            
            notificationGlobal({
                message: "Evento cadastrado com sucesso",
                type: "success",
                description: "Veja seu evento na página eventos"
            })
        } catch (error) {
        console.error(error);
        } 
    }

    async function updateEvent(dataBase: Firestore, nameCollection: string, idDocument: string, event: EventProps) {
        try {
            await setDoc(doc(dataBase, nameCollection, idDocument), event);
            notificationGlobal({
                message: "Evento Atualizado com sucesso",
                type: "success",
                description: "Veja o evento atualizado na página eventos"
            })
        } catch (error) {
            console.error(error);
        }
    }

    async function deleteEvent(dataBase: Firestore, nameCollection: string, idDocument: string) {
        try {
            setHandleSpinEvent(true)
            await deleteDoc(doc(dataBase, nameCollection, idDocument));
            notificationGlobal({
                message: "Evento excluido com sucesso",
                type: "success",
                description: "Ventos disponiveis na página Eventos"
            })
        } catch (error) {   
            console.log(error)
        } finally {
            setHandleSpinEvent(false)
        }
    }

    return (
        <EventContext.Provider value={{
            events,
            handleSpin,
            setHandleSpinEvent,
            createUrlImage,
            idEvent,
            setHandleIdEvent,
            getEvents,
            getEvent,
            createEvent,
            updateEvent,
            deleteEvent
        }}>
            { children }
        </EventContext.Provider>
    )
}