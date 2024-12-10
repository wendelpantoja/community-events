import { Header } from "../../components/Header";
import { Container } from "../../styles/GlobalStyles";
import { Differential, Introduction, Services, Start } from "./styles";
import { Footer } from "../../components/Footer";

export function Home() {

    return( 
        <>
            <Header />
            <Container >
                <Introduction>
                    
                        <div className="container_text">

                            <div className="container_title">
                                <h1>Compartilhe seus eventos de forma <span>simplificada</span></h1>
                            </div>

                            <div className="container_subtitle">
                                <p>
                                    Planeje, promova e gerencie eventos incríveis com facilidade. 
                                    Faça parte dessa transformação comunitária!
                                </p>
                            </div>

                            <a href="/register">
                                <button className="button_introduction">
                                    Comece agora
                                </button>
                            </a>

                        </div>

                        <div className="container_photos">

                            <img src="/assets/img/img-intro-01.jpg" alt="" />
                            <img src="/assets/img/img-intro-01.jpg" alt="" />

                            <img src="/assets/img/img-intro-02.jpg" alt="" />
                            <img src="/assets/img/img-intro-02.jpg" alt="" />

                            <img src="/assets/img/img-intro-03.jpg" alt="" />
                            <img src="/assets/img/img-intro-03.jpg" alt="" />

                        </div>

                </Introduction>

                <Services>
                    <h2>Nossos <span>Serviços</span></h2>

                    <div className="container_cards">

                        <div className="card">
                            <i className='bx bx-calendar'></i>
                            <h3>Planeje <br/> seus eventos</h3>
                            <p>
                                Crie cupons de desconto. Categorias de inscrição. 
                                Colete dados. Vendas no cartão, boleto e PIX. 
                            </p>
                        </div>

                        <div className="card">
                            <i className='bx bx-book-content'></i>
                            <h3>Gerencie <br/> seus eventos</h3>
                            <p>
                                Crie cupons de desconto. Categorias de inscrição. 
                                Colete dados. Vendas no cartão, boleto e PIX. 
                            </p>
                        </div>

                        <div className="card">
                            <i className='bx bxs-share-alt'></i>
                            <h3>Compartilhe <br/> seus eventos</h3>
                            <p>
                                Crie cupons de desconto. Categorias de inscrição. 
                                Colete dados. Vendas no cartão, boleto e PIX. 
                            </p>
                        </div>

                    </div>

                </Services>

                <Differential>
                    <div className="container_differ differ01">

                        <div className="container_img img01">
                            <img src="/assets/img/img-differ-01.jpg" alt="" />
                            <img src="/assets/img/img-differ-01.jpg" alt="" />
                        </div>

                        <div className="container_text">
                            <h2>Foco na <span>facilidade</span> de Uso</h2>
                            <h4>
                                Não é necessário ser um expert! Nosso sistema é fácil de usar, com uma interface amigável que 
                                permite a você concentrar-se no conteúdo do evento, não nas complexidades do gerenciamento.
                            </h4>
                        </div>

                    </div>

                    <div className="container_differ differ02">

                        <div className="container_text">
                            <h2>Organize eventos sem <span>dificuldades</span></h2>
                            <h4>
                                Não é necessário ser um expert! Nosso sistema é fácil de usar, com uma interface amigável que 
                                permite a você concentrar-se no conteúdo do evento, não nas complexidades do gerenciamento.
                            </h4>
                        </div>

                        <div className="container_img img02">
                            <img src="/assets/img/img-differ-02.jpg" alt="" />
                            <img src="/assets/img/img-differ-02.jpg" alt="" />
                        </div>

                    </div>
                </Differential>

                <Start>
                    <div className="container_text">

                        <h2>Pronto para começar?</h2>
                        <p>
                            Crie seu evento e compartilhe facilmente com sua cominidade pela internet
                        </p>

                    </div>

                    <a href="/register">

                        <button className="button_start">
                            Criar evento
                        </button>
                        
                    </a>
                </Start>
            </Container>
            <Footer />
        </> 
    )
}