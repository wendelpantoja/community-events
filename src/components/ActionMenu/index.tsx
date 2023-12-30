import { Link } from "react-router-dom";
import { ContainerButtons, ContainerMenu } from "./styles";
import { CloseOutlined } from "@ant-design/icons";
import { Button } from "../Header/styles";
import { BiUser } from "react-icons/bi";

interface MenuProps {
    action?: string;
    handleMenu: (value: boolean) => void;
}


export function ActionMenu({action, handleMenu}: MenuProps) {
    function closeMenu() {
        handleMenu(true)
    }
    return (
        <ContainerMenu $activeMenu={action}>
            <CloseOutlined className="close" onClick={closeMenu}/>
            <ContainerButtons>
                <div className="links-list-mobile">
                    <ul className="list">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/events">Encontrar eventos</Link></li>
                    </ul>
                </div>
                <Link to="/register">
                    <Button $background="#00856F" $border="none" $color="white">
                        Criar Eventos
                    </Button>
                </Link>
                <Link to="/login">
                    <Button $background="transparent" $border="2px solid #00856F" $color="#00856F">
                        <BiUser /> Login
                    </Button>
                </Link>
            </ContainerButtons>
        </ContainerMenu>
    )
}