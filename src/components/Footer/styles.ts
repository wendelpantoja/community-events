import styled from "styled-components";

export const FooterComponent = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 30px;
    background-color: #00856F;
    margin-top: 50px;

    /* .container_conteudo {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 200px;

        .eventos {
            h2 {
                font-size: 20px;
                font-weight: 700;
                color: white;
                margin-bottom: 15px;
            }
            ul {
                display: flex;
                align-items: baseline;
                flex-direction: column;
                gap: 20px;
            }
            ul li a {
                color: white;
                font-size: 14px;
                font-weight: 400;
            }
        }
        .sobre {
            h2 {
                font-size: 20px;
                font-weight: 700;
                color: white;
                margin-bottom: 15px;
            }
            ul {
                display: flex;
                align-items: baseline;
                flex-direction: column;
                gap: 20px;
            }
            ul li a {
                color: white;
                font-size: 14px;
                font-weight: 400;
            }
        }
        .social_media {
            h2 {
                font-size: 20px;
                font-weight: 700;
                color: white;
                margin-bottom: 15px;
            }
            ul {
                display: flex;
                align-items: baseline;
                flex-direction: column;
                gap: 20px;
            }
            ul li a {
                color: white;
                font-size: 14px;
                font-weight: 400;
            }
        }
    } */
    .cripto {
        color: white;
        text-align: center;
    }

    @media (max-width: 904px) {
        height: auto;
        padding: 20px;

        .container_conteudo {
            flex-direction: column;
            gap: 30px;
        }
    }
`