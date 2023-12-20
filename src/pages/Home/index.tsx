import { Header } from "../../components/Header";
import { Container } from "../../styles/GlobalStyles";
import { Button, SectionIntroduction, SectionRectangle, SectionServices } from "./styles";
import { FaArrowRightLong } from "react-icons/fa6"
import IconTicket from "../../assets/img/icon-ticket.svg"
import ImgCollabOne from "../../assets/img/img-collab-pana.png"
import { Footer } from "../../components/Footer";
import ImgCommunityAmico from "../../assets/img/img-community-amico.png"
import { Link } from "react-router-dom";


export function Home() {
    return( 
        <>
            <Header />
            <Container >
                <SectionIntroduction>
                        <div className="container_introduction">
                            <h2>Conecte-se com suas comunidades</h2>
                            <p>Bem-vindo ao nosso portal de gerenciamento de eventos, dedicado a fortalecer comunidades e impulsionar a colaboração. Planeje, promova e gerencie eventos incríveis com facilidade. Faça parte dessa transformação comunitária!</p>
                            <Link to="/register">
                                <Button $background="#00856F" $border="none" $color="white">
                                    Criar Eventos <FaArrowRightLong />
                                </Button>
                            </Link>
                        </div>

                        <div className="image_introduction">
                            <img src={ImgCommunityAmico} alt="" />
                        </div>
                </SectionIntroduction>
                <SectionServices>
                    <h2>Nossos serviços</h2>
                    <div className="container_cards">
                        <div className="card">
                            <img src={IconTicket} alt="" />
                            <h3>Venda mais ingressos</h3>
                            <p>Crie cupons de desconto. Categorias de inscrição. Colete dados. Vendas no cartão, boleto e PIX.</p>
                        </div>
                        <div className="card">
                            <img src={IconTicket} alt="" />
                            <h3>Venda mais ingressos</h3>
                            <p>Crie cupons de desconto. Categorias de inscrição. Colete dados. Vendas no cartão, boleto e PIX.</p>
                        </div>
                        <div className="card">
                            <img src={IconTicket} alt="" />
                            <h3>Venda mais ingressos</h3>
                            <p>Crie cupons de desconto. Categorias de inscrição. Colete dados. Vendas no cartão, boleto e PIX.</p>
                        </div>
                    </div>
                </SectionServices>
                <SectionRectangle 
                    $background="#00856F" 
                    $colorH2="white" 
                    $color="white" 
                    $gap="100px"
                    $flex="column"
                >
                    <div className="image-rectangle">
                        <img src={ImgCollabOne} alt="" />
                    </div>
                    <div className="informations">
                        <h2>Foco na facilidade de Uso</h2>
                        <p>Não é necessário ser um expert! Nosso sistema é fácil de usar, com uma interface amigável que permite a você concentrar-se no conteúdo do evento, não nas complexidades do gerenciamento.</p>
                    </div>
                </SectionRectangle>
                <SectionRectangle 
                    $background="white" 
                    $colorH2="black" 
                    $color="black" 
                    $gap="100px"
                    $flex="column-reverse"
                >
                    <div className="informations">
                        <h2>Foco na facilidade de Uso</h2>
                        <p>Não é necessário ser um expert! Nosso sistema é fácil de usar, com uma interface amigável que permite a você concentrar-se no conteúdo do evento, não nas complexidades do gerenciamento.</p>
                    </div>
                    <div className="image-rectangle">
                        <img src={ImgCollabOne} alt="" />
                    </div>
                </SectionRectangle>
            </Container>
            <Footer />
        </> 
    )
}