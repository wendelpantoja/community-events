import { User } from "firebase/auth";
import { ReactNode } from "react";

export interface IUser {
    user: User | null;
}

export interface UserProps {
    nome: string,
    sobrenome: string,
    email: string,
    password: string,
    passwordconfirm?: string
}

export interface IContext extends IUser {
    authenticate: (email: string, senha: string) => Promise<void>;
    createUser: (nome: string, sobrenome: string, email: string, password: string) => Promise<void>;
    logout: () => void;
    fireBaseErrors: (error: string) => void;
    handleSpinState: boolean;
}

export interface IAuthProvider {
    children: ReactNode;
}