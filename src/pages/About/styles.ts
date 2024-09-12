import styled from "styled-components";

export const AboutUs = styled.div`
    width: 100%;
    max-width: 503px;
    margin: 0 auto;
    text-align: center;

    margin-top: 150px;

    p {
        font-weight: var(--font-medium);
        line-height: var(--small-line-height);

        margin-top: 16px;
    }
`
export const AboutProject = styled(AboutUs)`
    width: 100%;
    max-width: 752px;
`

export const Technology = styled.div`
    margin-bottom: 150px;
    h3 {
        text-align: center;
        margin-top: 150px;
        margin-bottom: 90px;
    }
    .container_cards_tec {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-row-gap: 82px;
        justify-items: center;

        width: 100%;
        max-width: 1230px;
        margin: 0 auto;
    }
    .container_cards_tec
    .card_tec {
        width: 220px;
        
        border-radius: 10px;

        color: var(--white-color);
        background-color: var(--violet-color);

        padding: 30px 10px;

        i {
            font-size: 40px;
        }
        img {
            width: 40px;
            height: 40px;
        }
        h4 {
            margin-bottom: 15px;
        }
        p {
            font-size: var(--small-font-size);
        }
    }


    @media (max-width: 700px) {
        .container_cards_tec {
            grid-template-columns: repeat(2, 1fr);
            grid-row-gap: 30px;
        }
    }

    // ========== MEDIA MOBILE =========
    @media (max-width: 470px) {
        .container_cards_tec {
            grid-template-columns: 1fr;
        }
        .container_cards_tec 
        .card_tec {
            width: 100%;
            max-width: 300px;

        }
    }
`