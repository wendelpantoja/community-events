import { Container } from "../../styles/GlobalStyles";
import { Card } from "../Card";

import { Swiper, SwiperSlide } from 'swiper/react';

import { ContainerEventsComponent, PlusEvents } from "./styles";
import { Navigation } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { usePagination } from "../../hooks/usePagination";
import { useEffect, useState } from "react";
import { DocumentData } from "firebase/firestore";
import { useFilter } from "../../context/FilterProvider/useFilter";
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
    const [handleSpin, setHandleSpin] = useState(false)

    useEffect(() => {
        async function handleEvents() {
            try {
                setHandleSpin(true)
                const filterDocs = await getFilterDoc('Events', nameEvent)

                setDataEvents(filterDocs)
            } catch (error) {
                console.error(error)
            } finally {
                setHandleSpin(false)
            }
        }

        handleEvents()
    }, [nameEvent])
    

    return (
        <Container>
            <ContainerEventsComponent>
                <h2>Evento <span>{nameEvent}</span></h2>

                {dataEvents?.length === 0 && <h3>Não há eventos</h3>}

                {handleSpin && (
                    <div className="container_spin">
                        <HandleSpin typeColor="spin_violet"/>
                    </div>
                )}
                
                <Swiper 
                    className="container_swiper"
                    modules={[Navigation]}
                    breakpoints={{
                    300: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    370: {
                        slidesPerView: 1.3,
                        spaceBetween: 30,
                    },
                    430: {
                        slidesPerView: 1.5,
                        spaceBetween: 30,
                    },
                    500: {
                        slidesPerView: 1.7,
                        spaceBetween: 30,
                    },
                    580: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    685: {
                        slidesPerView: 2.3,
                        spaceBetween: 30,
                    },
                    760: {
                        slidesPerView: 2.5,
                        spaceBetween: 10,
                    },
                    840: {
                        slidesPerView: 2.7,
                        spaceBetween: 10,
                    },
                    950: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1050: {
                        slidesPerView: 3.5,
                        spaceBetween: 30,
                    },
                    1080: {
                        slidesPerView: 3.8,
                        spaceBetween: 30,
                    },
                    1120: {
                        slidesPerView: 4,
                        spaceBetween: 10,
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
