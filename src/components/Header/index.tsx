import { useLocation } from "react-router-dom";
import { Container } from "../../styles/GlobalStyles";
import { 
    ButtonConect, 
    ButtonCreate, 
    ContainerButtons, 
    HeaderComponent, 
    Logo, 
    Nav, 
    Menu,
    ContainerMenuMobile,
    MenuMobile,
    ContainerButtonsMobile, 
} from "./styles";
import { useState } from "react";

export function Header() {
    const local = useLocation()
    const [toggle, setToggle] = useState(false)

    return(
        <HeaderComponent>
            <Container>
                <Nav>
                    <a href="/">
                        <Logo>
                            <h3>Community</h3><span>Events</span>
                        </Logo>
                    </a>

                    <Menu>
                        <ul>
                            <li>
                                <a className={local.pathname === "/" ? "active_link" : "active_hover"} href="/">Home</a>
                            </li>
                            <li>
                                <a className={local.pathname === "/events" ? "active_link" : "active_hover"} href="/events">Events</a>
                            </li>
                            <li>
                                <a className={local.pathname === "/about" ? "active_link" : "active_hover"} href="/about">About</a>
                            </li>
                        </ul>
                    </Menu>
                    
                    <ContainerButtons>
                        <a href="/login">
                            <ButtonConect>
                                Conecte-se
                            </ButtonConect>
                        </a>
                        <a href="/register">
                            <ButtonCreate>
                                Criar evento
                            </ButtonCreate>
                        </a>
                    </ContainerButtons>

                    <i className='bx bx-menu-alt-right' onClick={() => setToggle(true)} />

                </Nav>

                {toggle && (
                    <ContainerMenuMobile>
                        <div className="container_close">
                            <i className='bx bx-x' onClick={() => setToggle(false)}/>
                        </div>

                        <MenuMobile>
                            <ul>
                                <li>
                                    <a className={local.pathname === "/" ? "active_link" : "active_hover"} href="/">Home</a>
                                </li>
                                <li>
                                    <a className={local.pathname === "/events" ? "active_link" : "active_hover"} href="/events">Events</a>
                                </li>
                                <li>
                                    <a className={local.pathname === "/about" ? "active_link" : "active_hover"} href="/about">About</a>
                                </li>
                            </ul>
                        </MenuMobile>
                        
                        <ContainerButtonsMobile>
                            <a href="/login">
                                <ButtonConect>
                                    Conecte-se
                                </ButtonConect>
                            </a>
                            <a href="/register">
                                <ButtonCreate>
                                    Criar evento
                                </ButtonCreate>
                            </a>
                        </ContainerButtonsMobile>

                    </ContainerMenuMobile>
                )}

            </Container>
        </HeaderComponent>
    )
}

