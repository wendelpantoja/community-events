import { useEvent } from "../../context/EventProvider/useEvent";
import { db } from "../../services/fireBaseConfig";
import { HandleSpin } from "../Spin";
import { Modal } from "./styles";

type ModalProps = {
    idEvent: string;
    nameEvent: string;
    setIsModal: (acitveModal: boolean) => void;
}
export function ModalTrash({ idEvent, nameEvent, setIsModal }: ModalProps) {
    const { handleSpin, deleteEvent } = useEvent()

    async function deleteDoc() {
        await deleteEvent(db, "Events", idEvent)
        setIsModal(false)
    }

    return (
        <Modal>
            <div className="container_modal">
                <div className="header_modal">
                    <p>Deletar produto?</p>
                    <i className='bx bx-x' onClick={() => setIsModal(false)}></i>
                </div>

                <div className="description_product">
                    <p>Você tem certeza que deseja deletar o evento "<span>{nameEvent}</span>"?</p>
                </div>

                <div className="warning_modal">
                    <div className="icon_warning">
                        <i className='bx bx-error'></i>
                        <p>Atenção</p>
                    </div>

                    <div className="message_warning">
                        Fique ciente que ao clicar em confirmar, não será possivel recuperar o evento.
                    </div>
                </div>
                <div className="buttons_modal">
                    <button 
                        className="button_cancel"
                        onClick={() => setIsModal(false)} 
                    >
                        Cancelar
                    </button>

                    <button 
                        className="button_confirm"
                        onClick={() => deleteDoc()} 
                    >
                    {handleSpin && <HandleSpin />}
                    {!handleSpin && <p>Confirmar</p>}
                    </button>
                </div>
            </div>
        </Modal>
    )
}