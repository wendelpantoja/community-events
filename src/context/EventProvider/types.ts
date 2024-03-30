import { Firestore, QuerySnapshot } from "firebase/firestore";

export interface EventProps {
    user_id: string;
    url_imagem: string;
    titulo: string;
    descricao: string;
    data: string;
    hora: string;
    tipo_evento: string;
    tipo_categoria: string
}

export interface IEvent {
    event?: EventProps[],
}

export interface IcontextEvent extends IEvent {
    getEvents: (dataBase: Firestore, nameCollection: string) => Promise<QuerySnapshot>;
    getEvent: (dataBase: Firestore, nameCollection: string, idDocument: string) => Promise<void>;
    createEvent: (dataBase: Firestore, nameCollection: string, event: EventProps) => Promise<void>;
    updateEvent: (dataBase: Firestore, nameCollection: string, event: EventProps) => Promise<void>;
    deleteEvent: (dataBase: Firestore, nameCollection: string, idDocument: string) => Promise<void>;
}

export interface IEventProvider {
    children: React.ReactNode;
}