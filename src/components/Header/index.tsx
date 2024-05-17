import { useLocation } from "react-router-dom";
import { Container } from "../../styles/GlobalStyles";
import { ButtonConect, ButtonCreate, ContainerButtons, HeaderComponent, Logo, Nav, Menu } from "./styles";

export function Header() {
    const local = useLocation()

    return(
        <HeaderComponent>
            <Container>
                <Nav>
                    <Logo>
                        <h3>Community</h3><span>Events</span>
                    </Logo>

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
                        <ButtonConect>
                            Conecte-se
                        </ButtonConect>
                        
                        <ButtonCreate>
                            Criar evento
                        </ButtonCreate>
                    </ContainerButtons>
                </Nav>
            </Container>
        </HeaderComponent>
    )
}

