import { Container } from "../../styles/GlobalStyles";
import { Card } from "../Card";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { ContainerEventsComponent } from "./styles";
import { eventsCards } from "./events";

import 'swiper/css';
import 'swiper/css/navigation';


interface CardContainerProps {
    event?: string;
}

export function ContainerEvents({event}: CardContainerProps) {
    
    return (
        <Container>
            <ContainerEventsComponent>
                <h1 className="">Eventos {event}</h1>
                <Swiper 
                     slidesPerView={1.3}
                     spaceBetween={15}
                     breakpoints={{
                        450: {
                            slidesPerView: 1.5,
                            spaceBetween: 10,
                        },
                        640: {
                            slidesPerView: 2.3,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2.5,
                            spaceBetween: 20,
                        },
                        970: {
                            slidesPerView: 3.3,
                            spaceBetween: 20,
                            },
                        1024: {
                            slidesPerView: 3.5,
                            spaceBetween: 20,
                        },
                        1085: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        1350: {
                        slidesPerView: 4.5,
                        spaceBetween: 20,
                        },
                     }}
                >
                    {eventsCards.filter(type => type.type.includes(`${event}`)).map((dados, index) => (
                        <SwiperSlide key={index}>
                            <Card 
                                img={dados.img} 
                                title={dados.title}
                                type={dados.type}
                                description={dados.description} 
                                data={dados.data} 
                                cidade={dados.cidade} 
                                categorie={dados.categorie}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </ContainerEventsComponent>
        </Container>
    )
}
