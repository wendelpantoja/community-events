import { createContext, useEffect, useState } from "react";
import { IAuthProvider, IContext } from "./types";
import { User, onAuthStateChanged, signOut } from "firebase/auth";
import { Notification } from "../../components/Notification";
import { createUserAcess, singInUserAcess } from "../../services/authentications/authAuthentications";
import { auth, db } from "../../services/fireBaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { errosCode } from "./erros";

export const AuthContext = createContext<IContext>({} as IContext)

export function AuthProvider({ children }: IAuthProvider) {
    const [user, setUser] = useState<User | null>(null)
    const [handleSpinState, setHandleSpinState] = useState(false)
    const { notify } = Notification()

    useEffect(() => {
        const subscriber = onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser(user)
            }
        })   
        
        return subscriber
    }, [])

    async function authenticate(email: string, password: string) {
        setHandleSpinState(true)
        try {
            const response = await singInUserAcess(email, password)
            const data = response.user
            setUser(data)
        } finally {
            setHandleSpinState(false)
        }
    }

    async function createUser(nome: string, sobrenome: string, email: string, password: string) {
        setHandleSpinState(true)
        try {
            const user = await createUserAcess(email, password);
            await addDoc(collection(db, "Users"), {
                id_user: user.user.uid,
                email: user.user.email,
                nome: nome,
                sobrenome: sobrenome,
                url_photo: ""
            });
            notify({
                message: "Usuário criado com sucesso",
                type: "success"
            })
        } finally {
            setHandleSpinState(false)
        }

    }

    function logout() {
        setHandleSpinState(true)
        signOut(auth)
        .then(() => {
            setUser(null)
            setHandleSpinState(false)
        })
        .catch(error => console.log(error))
    }

    function fireBaseErrors(error: string | unknown) {
        errosCode.find((element) => {
            if(error == element.error) {
                notify({
                    message: element.message,
                    type: "error",
                })
            }
        })
    }

    return (
        <AuthContext.Provider value={{
            user, 
            authenticate, 
            createUser,
            logout,
            fireBaseErrors,
            handleSpinState,
        }}>
            {children}
        </AuthContext.Provider>
    )
}