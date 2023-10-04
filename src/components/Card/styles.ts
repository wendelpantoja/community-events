import styled from "styled-components";

export const CardComponent = styled.div`
    width: 234px;
    height: 293px;
    background-color: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 30px;

    .container_img {
        width: 100%;
        height: 147px;
        border-radius: 10px 10px 0px 0px;
        background: #C9C9C9;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .container_descriptions {
        width: 100%;
        height: 100%;
        padding: 19px 13px;
        background-color: white;
        border-radius: 10px;

        p {
           color: #000;
           font-size: 12px;
           font-weight: 500;
        }

        .container_title {
            width: 100%;
            height: 75px;

            h2 {
                font-size: 16px;
                font-weight: 700;
            }
        }

    }
`