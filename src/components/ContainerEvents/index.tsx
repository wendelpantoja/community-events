import { Container } from "../../styles/GlobalStyles";
import { Card } from "../Card";
import { ContainerEventsComponet } from "./styles";
import { SwiperSlide } from "swiper/react";

import { eventsCards } from "./events"; 

import "swiper/css";
import Slider from "../Slider";

interface CardContainerProps {
    event?: string;
}

export function ContainerEvents({ event }: CardContainerProps) {

    const settings = {
        spaceBetween: 120,
        slidesPerView: 4,
    }

    
    return (
        <Container>
            <ContainerEventsComponet>
                <div className="container_type_event">
                    <h2>Eventos {event}</h2>
                </div>
                <div className="container_cards">
                    <Slider settings={settings}>
                        {eventsCards.map((cards) => (
                            <SwiperSlide>
                                <Card key={cards.title}
                                img={cards.img} 
                                title={cards.title} 
                                data={cards.data} 
                                cidade={cards.cidade}/>
                            </SwiperSlide>
                        ))}
                    </Slider>
                </div>
            </ContainerEventsComponet>
        </Container>
    )
}