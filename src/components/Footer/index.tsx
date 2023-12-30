// import { Link } from "react-router-dom";
import { Container } from "../../styles/GlobalStyles";
import { FooterComponent } from "./styles";


export function Footer() {
    return (
        <FooterComponent>
            <Container>
                {/* <div className="container_conteudo">
                    <div className="eventos">
                        <h2>Eventos</h2>
                        <ul>
                            <li><Link to="#">Online</Link></li>
                            <li><Link to="#">Presenciais</Link></li>
                            <li><Link to="#">Híbridos</Link></li>
                            <li><Link to="#">Personalizados</Link></li>
                        </ul>
                    </div>
                    <div className="sobre">
                        <h2>Sobre</h2>
                        <ul>
                            <li><Link to="#">Online</Link></li>
                            <li><Link to="#">Presenciais</Link></li>
                            <li><Link to="#">Híbridos</Link></li>
                            <li><Link to="#">Personalizados</Link></li>
                        </ul>
                    </div>
                    <div className="social_media">
                        <h2>Social Media</h2>
                        <ul>
                            <li><Link to="#">Online</Link></li>
                            <li><Link to="#">Presenciais</Link></li>
                            <li><Link to="#">Híbridos</Link></li>
                            <li><Link to="#">Personalizados</Link></li>
                        </ul>
                    </div>
                </div> */}
                <div className="cripto">
                    <p>2023 © Community Events Reserved</p>
                </div>
            </Container>
        </FooterComponent>
    )
}