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
                        <h2>Community</h2><span>Events</span>
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
                            Login
                        </ButtonConect>
                        
                        <ButtonCreate>
                            Create event
                        </ButtonCreate>
                    </ContainerButtons>
                </Nav>
            </Container>
        </HeaderComponent>
    )
}

