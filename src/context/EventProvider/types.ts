import { DocumentData, Firestore, QuerySnapshot } from "firebase/firestore";

export interface EventProps {
    user_id: string;
    url_imagem: string | unknown;
    titulo: string;
    descricao: string;
    data_inicio: Date | string;
    data_fim: Date | string;
    hora_inicio: Date | string;
    hora_fim: Date | string;
    tipo_evento: string;
    tipo_categoria: string;
    local: string;
}

export interface EventUpdate {
    idEvent?: string | null;
}

export interface IEvent extends EventUpdate {
    events?: DocumentData[] | null,
}

export interface IcontextEvent extends IEvent {
    spinEvents: boolean;
    handleSpin: boolean;
    setHandleSpinEvent: (value: boolean) => void;
    setHandleIdEvent: (uid: string) => void;
    createUrlImage: (fileList: File) => Promise<unknown>;
    getEvents: (dataBase: Firestore, nameCollection: string) => Promise<QuerySnapshot>;
    getEvent: (dataBase: Firestore, nameCollection: string, idDocument: string) => Promise<DocumentData | null>;
    createEvent: (dataBase: Firestore, nameCollection: string, event: EventProps) => Promise<void>;
    updateEvent: (dataBase: Firestore, nameCollection: string, idDocument: string, event: EventProps) => Promise<void>;
    deleteEvent: (dataBase: Firestore, nameCollection: string, idDocument: string) => Promise<void>;
    setSpinEvents: (value: boolean) => void;
}

export interface IEventProvider {
    children: React.ReactNode;
}