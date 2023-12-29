import { Link } from "react-router-dom";
import { Container } from "../../styles/GlobalStyles";
import { Button, HeaderComponent } from "./styles";
import { RxHamburgerMenu } from "react-icons/rx"
import { useState } from "react";
import { ActionMenu } from "../ActionMenu";

export function Header() {
    const [actionMenu, setActionMenu] = useState(true)
    function handleMenu(value: boolean) {
        setActionMenu(value)
    }
    return(
        <HeaderComponent>
            <Container>
                <nav className="navegation">
                    <div className="logo">
                        <h2>Community<span>Events</span></h2>
                    </div>

                    <div className="links-list">
                        <ul className="list">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/events">Encontrar eventos</Link></li>
                        </ul>
                    </div>
                        
                    <div className="buttons">
                        <Link to="/login">
                            <Button $background="transparent" $border="2px solid #00856F" $color="#00856F">
                                <i className='bx bxs-user'></i> Conecte-se
                            </Button>
                        </Link>
                        <Link to="/register">
                            <Button $background="#00856F" $border="none" $color="white">
                                Criar Eventos
                            </Button>
                        </Link>
                    </div>
                    <div className="menu">
                        {actionMenu && <RxHamburgerMenu onClick={() => handleMenu(false)}/>}
                    </div>
                </nav>
            </Container>
            {!actionMenu && 
                    <ActionMenu 
                        action={actionMenu ? "-100%" : "0"}
                        handleMenu={handleMenu}
                    />
                }
        </HeaderComponent>
    )
}

