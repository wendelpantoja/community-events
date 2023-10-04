import { useState } from "react";
import { Button, ContainerModal } from "./styles";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth";
import { FirebaseError } from "firebase/app";
import { HandleSpin } from "../Spin";

interface IfunctioProp {
    handleModal: (value: boolean) => void; 
}

export function Modal({ handleModal }: IfunctioProp) {
    const auth = useAuth()
    const navigate = useNavigate()
    const [handleSpin, setHandleSpin] = useState(false)

    async function handleLogout() {
        setHandleSpin(true)
        try {
            await auth.logout()  
            setHandleSpin(false)
        } catch (error) {
            if(error instanceof FirebaseError) {
                await auth.fireBaseErrors(error.code)
            }
        } finally {
            handleModal(false)
            navigate("/login")
        }
    }

    return (
        <ContainerModal>
            {handleSpin && <HandleSpin />}
            {!handleSpin && (
                <>
                    <h2>Deseja realmente sair?</h2>
                    <div className="container_buttons">
                        <Button onClick={() => handleModal(false)} color="#8C8C8C">Cancelar</Button>
                        <Button onClick={handleLogout} color="red">Confirmar</Button>
                    </div> 
                </>
            )}  
        </ContainerModal>
    )
}