import { Container } from "../../styles/GlobalStyles";
import { Card } from "../Card";

import { Swiper, SwiperSlide } from 'swiper/react';

import { ContainerEventsComponent, PlusEvents } from "./styles";
import { useEvent } from "../../context/EventProvider/useEvent";
import { Navigation } from "swiper/modules";
import { useState } from "react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface CardContainerProps {
    event?: string;
}

export function ContainerEvents({event}: CardContainerProps) {

    const { events } = useEvent()
    const [indexSwiper, setIndexSwiper] = useState<number>(0)
    const [isEnd, setIsEnd] = useState<boolean>(false)
    
    return (
        <Container>
            <ContainerEventsComponent>
                <h1 className="">Evento {event}</h1>
                <Swiper 
                    className="container_swiper"
                    modules={[Navigation]}
                    slidesPerView={1.3}
                    spaceBetween={15}
                    breakpoints={{
                    450: {
                        slidesPerView: 1.5,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 5,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 5,
                    },
                    970: {
                        slidesPerView: 3.3,
                        spaceBetween: 5,
                        },
                    1024: {
                        slidesPerView: 3.5,
                        spaceBetween: 5,
                    },
                    1085: {
                        slidesPerView: 4,
                        spaceBetween: 5,
                    },
                    1350: {
                    slidesPerView: 4.5,
                    spaceBetween: 20,
                    },
                    }}
                    navigation={{
                        nextEl: ".button_next",
                        prevEl: ".button_prev"
                    }}
                    onSlideChange={(swiper) => {
                        setIsEnd(swiper.isEnd)
                        setIndexSwiper(swiper.activeIndex)
                    }}
                >
                    {events?.filter(type => type.data().tipo_evento.toLowerCase() === event?.toLowerCase())
                    .slice(0, 9)
                    .map((event, index) => (
                        <SwiperSlide className="swiper_slide" key={event.id}>
                            {index === 8 ? (
                                <PlusEvents>
                                    <p>Ver mais</p>
                                </PlusEvents>
                            ) : (
                                <Card 
                                    data={event}
                                />
                            )}
                        </SwiperSlide>
                    ))}
                    
                    <button className={`button_prev ${indexSwiper === 0 ? "desable" : ""}`}>
                        <i className='bx bxs-chevron-left swiper-button-disabled'></i>
                    </button>
    
                    <button className={`button_next ${isEnd === true ? "desable" : ""}`}>
                        <i className='bx bxs-chevron-right'></i>
                    </button>
                </Swiper>
            </ContainerEventsComponent>
        </Container>
    )
}
