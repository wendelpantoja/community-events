import { DocumentData } from "firebase/firestore";
import { CardComponent } from "./styles";
import { useEvent } from "../../context/EventProvider/useEvent";
import { Link, useNavigate } from "react-router-dom";
import { ModalTrash } from "../ModalTrash";
import { useState } from "react";

type CardType = {
  data?: DocumentData;
  dataUser?: DocumentData[];
}

export function Card({ data, dataUser }: CardType) {
    const { setHandleIdEvent } = useEvent()
    const navigate = useNavigate()
    const [isModal, setIsModal] = useState(false)
    const [dataEvent, setDataEvent] = useState({
      idEvent: "",
      nameEvent: ""
    })

    function handleUpdate(uid: string) {
      try {
        setHandleIdEvent(uid)
        navigate("/dashboard/update-event")
      } catch (error) {
        console.log(error)
      }

    }

    if(dataUser) {
      return (
        <>
          {dataUser?.map((event: DocumentData) => (
            <Link to={`/event/${data?.id}`}>
              <CardComponent key={event.id}>
                <div className="container_img">
                    <div className="container_icons">

                      <i className='bx bx-edit' 
                        onClick={() => {
                          handleUpdate(event.id)
                      }} />

                      <i className='bx bx-trash' 
                        onClick={() => {
                          setDataEvent({
                              idEvent: event.id,
                              nameEvent: event.data().titulo
                          })
                          setIsModal(true)
                        }} 
                      />

                    </div>
                    <img src={event.data().url_imagem} alt="" />
                </div>

                <div className="container_descriptions">
                    <div className="type_event">
                      {event?.data().tipo_categoria}
                    </div>

                    <p>{event?.data().data_inicio}</p>

                    <div className="container_title">
                      <p>{event?.data().titulo}</p>
                    </div>
                    
                    <div className="footer_card">
                      <p>Cametá</p>
                      <p>{event?.data().tipo_evento}</p>
                    </div>
                </div>
              </CardComponent>
            </Link>
          ))}

          {isModal && (
              <ModalTrash
                idEvent={dataEvent?.idEvent}
                nameEvent={dataEvent?.nameEvent}
                setIsModal={setIsModal}
              />
          )}
        </>
      )
    }

    return (
      <>
          <Link to={`/event/${data?.id}`}>
            <CardComponent key={data?.id}>
              <div className="container_img">
                  <img src={data?.data().url_imagem} alt="" />
              </div>

              <div className="container_descriptions">
                  <div className="type_event">
                    {data?.data().tipo_categoria}
                  </div>

                  <p>{data?.data().data_inicio}</p>

                  <div className="container_title">
                      <p>{data?.data().titulo}</p>
                  </div>
                  
                  <div className="footer_card">
                    <p>Cametá</p>
                    <p>{data?.data().tipo_evento}</p>
                  </div>
              </div>
            </CardComponent>
          </Link>
      </>
    )
    
}