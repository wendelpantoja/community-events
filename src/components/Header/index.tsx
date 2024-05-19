import { useLocation } from "react-router-dom";
import { Container } from "../../styles/GlobalStyles";
import { ButtonConect, ButtonCreate, ContainerButtons, HeaderComponent, Logo, Nav, Menu } from "./styles";

export function Header() {
    const local = useLocation()

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
                </Nav>
            </Container>
        </HeaderComponent>
    )
}

