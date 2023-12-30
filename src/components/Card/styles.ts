import styled from "styled-components";

export const CardComponent = styled.div`
    width: 100%;
    max-width: 280px;
    height: auto;
    background-color: #FFF;
    box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1);
    border-radius: 10px;
    flex: 1 1 280px;

    cursor: pointer;

    .container_img {
        width: 100%;
        height: 180px;
        border-radius: 10px 10px 0px 0px;
        background: #C9C9C9;

        img {
            width: 100%;
            height: 100%;
            border-radius: 10px 10px 0px 0px;
        }
    }

    .container_descriptions {
        position: relative;
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 10px;

        .type_event {
            position: absolute;
            top: -15px;
            right: 20px;
            padding: 5px 10px;
            background-color: #00856F;
            text-align: center;
            color: white;
            font-size: 14px;
            font-weight: 500;

            border-radius: 5px;
        }

        p {
           color: #000;
           font-size: 12px;
           font-weight: 500;
        }

        .container_title {
            width: 100%;
            height: 40px;

            h2 {
                font-size: 16px;
                font-weight: 700;
            }
        }

        .description {
            width: 100%;
            height: 75px;
            overflow: hidden;
        }

        .footer_card {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

    }
`