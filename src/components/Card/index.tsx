import { QuerySnapshot } from "firebase/firestore";
import { CardComponent } from "./styles";

// interface CardProps {
//     img?: string;
//     titulo?: string;
//     tipo_evento?: string;
//     tipo_categoria?: string;
//     descricao?: string;
//     data?: string;
//     hora?: string;
//     cidade?: string;
//     categoria?: string;
// }
// {img, titulo, tipo_evento, tipo_categoria, descricao, data, hora, cidade}: CardProps
type CardType = {
  uid: string | undefined;
  data: QuerySnapshot;
}
export function Card({ uid, data }: CardType) {
    return (
        <>
          {data?.docs
          .filter((event) => event.data().user_id === uid)
          .map((event, index) => (
            <CardComponent key={index}>
              <div className="container_img">
                  <div className="container_icons">
                    <i className='bx bx-edit'></i>
                    <i className='bx bx-trash' ></i>
                  </div>
                  <img src={event.data().url_imagem} alt="" />
              </div>

              <div className="container_descriptions">
                  <div className="type_event">
                    {event.data().tipo_categoria}
                  </div>

                  <p>{event.data().data}</p>

                  <div className="container_title">
                      <h2>{event.data().titulo}</h2>
                  </div>

                  <div className="description">
                    {event.data().descricao} 
                  </div>
                  
                  <div className="footer_card">
                    <p>Cametá</p>
                    <p>{event.data().tipo_evento}</p>
                  </div>
              </div>
            </CardComponent>
          ))}
        </>
    )
}