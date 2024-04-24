import { Link } from "react-router-dom";
import { Container } from "../../styles/GlobalStyles";
import { Button, HeaderComponent } from "./styles";
import { useState } from "react";
import { ActionMenu } from "../ActionMenu";
import { useAuth } from "../../context/AuthProvider/useAuth";

export function Header() {
    const [actionMenu, setActionMenu] = useState(true)
    const { user } = useAuth()

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
                        {user ? (
                            <Link to={"/dashboard/create-event"}>
                                <Button $background="transparent" $border="2px solid #00856F" $color="#00856F">
                                    Dashboard
                                </Button>
                            </Link>
                        ): (
                            <Link to="/login">
                                <Button $background="transparent" $border="2px solid #00856F" $color="#00856F">
                                    Conecte-se
                                </Button>
                            </Link>
                        )}
                        <Link to="/register">
                            <Button $background="#00856F" $border="none" $color="white">
                                Criar Eventos
                            </Button>
                        </Link>
                    </div>
                    <div className="menu">
                        {actionMenu && <i className='bx bx-menu' onClick={() => handleMenu(false)}></i>}
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

