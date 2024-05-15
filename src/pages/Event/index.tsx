import { Link, useParams } from "react-router-dom";
import { Header, SectionImage, SectionInfo } from "./styles";
import { Footer } from "../../components/Footer";
import { Container } from "../../styles/GlobalStyles";
import { useEffect, useState } from "react";
import { useEvent } from "../../context/EventProvider/useEvent";
import { db } from "../../services/fireBaseConfig";
import { EventProps } from "../../context/EventProvider/types";


export function Event() {
    const { getEvent } = useEvent()
    const [dataEvent, setDataEvent] = useState<EventProps>()
    
    const params = useParams()

    useEffect(() => {
        async function handleEvent() {
            try {
                if(params.id) {
                    const event = await getEvent(db, "Events", params.id)

                    setDataEvent(event?.data())
                }
            } catch (error) {
                console.error(error)
            }
        }
        handleEvent()
    }, [params])

    return (
        <>
            <Header>
                <Container>
                    <nav className="nav_event">
                        <div className="nav_event_logo">
                            <h2>Community<span>Events</span></h2>
                        </div>

                        <Link to="#">
                            <button className="nav_event_button_login">
                                Login
                            </button>
                        </Link>
                    </nav>
                </Container>
            </Header>

            <main>
                <Container>
                    <SectionImage>
                        <img src={dataEvent?.url_imagem} alt="image_event" />
                    </SectionImage>

                    <SectionInfo>
                        <div className="section_title_info">

                            <div className="container_info">
                                <div className="title">
                                    <h2>{dataEvent?.titulo}</h2>
                                </div>

                                <div className="date_hour">
                                    <i className='bx bx-calendar'></i>
                                    {/* <p>03/04/2024 a 05/04/2024 - 08:00 - 21:00 GMT-3</p> */}
                                    <p>{dataEvent?.data_inicio} a {dataEvent?.data_fim} - {dataEvent?.hora_inicio} - {dataEvent?.hora_fim}</p>
                                </div>

                                <div className=" local">
                                    <i className='bx bx-map'></i>
                                    <p>Universidade Federal do Pará - Cametá-PA - Brasil</p>
                                </div>
                            </div>

                            <button className="section_title_button">
                                Inscreva-se
                            </button>

                        </div>
                    </SectionInfo>

                    <SectionInfo>
                        <div className="title_about">
                            <h2>Sobre o evento</h2>
                        </div>

                        <div className="description_event">
                            <p>
                                {dataEvent?.descricao}
                            </p>
                        </div>
                    </SectionInfo>                  
                </Container>
            </main>
            
            <Footer />
        </>
    )
}