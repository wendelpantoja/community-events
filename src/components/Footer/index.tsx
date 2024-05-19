import { Container } from "../../styles/GlobalStyles";
import { ContainerFooter } from "./styles";


export function Footer() {
    return (
        <ContainerFooter>
            <Container>
                <div className="box_footer">
                        <div className="logo_footer">
                            <a href="">
                                <h3>Community<span>Events</span></h3>
                            </a>
                        </div>
                    <div className="cripto">
                        <p>2023 © Community Events Reserved</p>
                    </div>
                </div>
            </Container>
        </ContainerFooter>
    )
}