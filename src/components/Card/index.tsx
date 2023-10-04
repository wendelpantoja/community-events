import { CardComponent } from "./styles";

interface CardProps {
    img: string;
    title: string;
    data: string;
    cidade: string;
}

export function Card({ img, title, data, cidade }: CardProps) {
    return (
        <CardComponent>
              <div className="container_img">
                  <img src={img} alt="" />
              </div>
              <div className="container_descriptions">
                  <p>{data}</p>
                  <div className="container_title">
                      <h2>{title}</h2>
                  </div>
                  <p>{cidade}</p>
              </div>
        </CardComponent>
    )
}