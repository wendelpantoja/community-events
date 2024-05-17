import { Container } from "../../styles/GlobalStyles";
import { ContainerFooter } from "./styles";


export function Footer() {
    return (
        <ContainerFooter>
            <Container>
                <div className="box_footer">
                    <div className="logo_footer">
                        <h2>Community<span>Events</span></h2>
                    </div>
                    <div className="cripto">
                        <p>2023 © Community Events Reserved</p>
                    </div>
                </div>
            </Container>
        </ContainerFooter>
    )
}