import { CardComponent } from "./styles";

interface CardProps {
    img?: string;
    title?: string;
    type?: string;
    description?: string;
    data?: string;
    cidade?: string;
    categorie?: string;
}

export function Card({img, title, type, categorie, description, data, cidade}: CardProps) {
    return (
        <CardComponent>
              <div className="container_img">
                  <img src={img} alt="" />
              </div>

              <div className="container_descriptions">
                  <div className="type_event">
                    {categorie}
                  </div>

                  <p>{data}</p>

                  <div className="container_title">
                      <h2>{title}</h2>
                  </div>

                  <div className="description">
                    {description} 
                  </div>
                  
                  <div className="footer_card">
                    <p>{cidade}</p>
                    <p>{type}</p>
                  </div>
              </div>
        </CardComponent>
    )
}