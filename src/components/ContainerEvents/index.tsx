import { Container } from "../../styles/GlobalStyles";
import { Card } from "../Card";

import { Swiper, SwiperSlide } from 'swiper/react';

import { ContainerEventsComponent, PlusEvents } from "./styles";
import { Navigation } from "swiper/modules";
// import { useState } from "react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import { HandleSpin } from "../Spin";
import { usePagination } from "../../hooks/usePagination";
import { useEffect, useState } from "react";
import { DocumentData } from "firebase/firestore";
import { useFilter } from "../../context/FilterProvider/useFilter";
import { useEvent } from "../../context/EventProvider/useEvent";
import { HandleSpin } from "../Spin";

interface CardContainerProps {
    nameEvent: string;
}

export function ContainerEvents({ nameEvent }: CardContainerProps) {
    const { setSelectEvent } = useFilter()
    const [indexSwiper, setIndexSwiper] = useState<number>(0)
    const [isEnd, setIsEnd] = useState<boolean>(false)

    const [dataEvents, setDataEvents] = useState<DocumentData[]>()
    const { getFilterDoc } = usePagination()
    const {handleSpin, setHandleSpinEvent} = useEvent()

    useEffect(() => {
        async function handleEvents() {
            try {
                setHandleSpinEvent(true)
                const filterDocs = await getFilterDoc('Events', nameEvent)

                setDataEvents(filterDocs)
            } catch (error) {
                console.error(error)
            } finally {
                setHandleSpinEvent(false)
            }
        }

        handleEvents()
    }, [nameEvent])
    
    return (
        <Container>
            <ContainerEventsComponent>
                <h2 className="">Evento <span>{nameEvent}</span></h2>

                {dataEvents?.length === 0 && <h3>Não há eventos</h3>}

                {handleSpin && (
                    <div className="container_spin">
                        <HandleSpin typeColor="spin_violet"/>
                    </div>
                )}
                
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

                    {dataEvents?.map((event, index) => (
                        <SwiperSlide className="swiper_slide" key={event.id}>
                            {index === 8 ? (
                                <PlusEvents onClick={() => {
                                    setSelectEvent(nameEvent)
                                }}>
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
