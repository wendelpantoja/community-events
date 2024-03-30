import { createContext } from "react";
import { EventProps, IEventProvider, IcontextEvent } from "./types";
import { Firestore, addDoc, collection, deleteDoc, doc, getDoc, getDocs } from "firebase/firestore";
import { useAuth } from "../AuthProvider/useAuth";

export const EventContext = createContext<IcontextEvent>({} as IcontextEvent)

export function EventProvider({ children }: IEventProvider) {
    const { notificationGlobal } = useAuth()

    async function getEvents(dataBase: Firestore, nameCollection: string) {
        const querySnapshot = await getDocs(collection(dataBase, nameCollection));
        
        return querySnapshot
    }

    async function getEvent(dataBase: Firestore, nameCollection: string, idDocument: string) {
        const docRef = doc(dataBase, nameCollection, idDocument);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
        } else {
            console.log("No such document!");
        }
    }

    async function createEvent(dataBase: Firestore, nameCollection: string, event: EventProps) {
        try {
            const docRef = await addDoc(collection(dataBase, nameCollection), event);
            
            console.log("Evento criado com sucesso", docRef);
            notificationGlobal({
                message: "Evento cadastrado com sucesso",
                type: "success",
                description: "Veja seu evento na página eventos"
            })
        } catch (error) {
        console.error(error);
        }
    }

    async function updateEvent(dataBase: Firestore, nameCollection: string, event: EventProps) {
        try {
            const docRef = await addDoc(collection(dataBase, nameCollection), event);
            console.log("Evento atualizado com sucesso", docRef);
        } catch (error) {
            console.error(error);
        }
    }

    async function deleteEvent(dataBase: Firestore, nameCollection: string, idDocument: string) {
        try {
            await deleteDoc(doc(dataBase, nameCollection, idDocument));
            console.log("Evento deletado com sucesso!")
        } catch (error) {   
            console.log(error)
        }
    }

    return (
        <EventContext.Provider value={{
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