import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container } from "../../styles/GlobalStyles";
import { AboutProject, AboutUs, Technology } from "./styles";
import { CardItensIcon, CardItensSvg } from "./infoCards";

export function About() {
    return (
        <>
            <Header />
                <Container>
                    <AboutUs>
                        <h3>Sobre <span>nós</span></h3>
                        <p>
                            Somos alunos da Universidade Federal do Pará, graduando em Sistemas de informação. 
                        </p>
                    </AboutUs>
                    <AboutProject>
                        <h3>Sobre o <span>projeto</span></h3>
                        <p>
                            Este projeto foi elaborado durante o estagio supervisionado no 
                            Laboratório de Abordagens Focadas no Aluno (LafocA). 
                            Buscamos aplicar na pratica os estudos de desenvolvimento web passados durante esse periodo. 
                        </p>
                    </AboutProject>
                    <Technology>
                        <h3><span>Tecnologias</span> ultilizadas</h3>

                        <div className="container_cards_tec">
                            {CardItensIcon.map((card, index) => (
                                <div className="card_tec" key={index}>
                                    <i className={card.icon}></i>
                                    <h4>{card.nameTec}</h4>
                                    <p>
                                        {card.descrition}
                                    </p>
                                </div>
                            ))}
                            {CardItensSvg.map((card, index) => (
                                <div className="card_tec" key={index}>
                                    <img src={card.icon} alt="" />
                                    <h4>{card.nameTec}</h4>
                                    <p>
                                        {card.descrition}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </Technology>
                </Container>
            <Footer />
        </>
    )
}