import styled from "styled-components";

export const AboutUs = styled.div`
    width: 503px;
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
    width: 752px;
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
        grid-template-columns: repeat(3, 220px);
        grid-column-gap: 120px;
        grid-row-gap: 82px;
        justify-content: center;
        width: 100%;
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
`

export const Devs = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 306px;
    width: 100%;
    height: 593px;

    background-color: var(--violet-color);

    .dev {
        color: var(--white-color);

        .image {
            width: 200px;
            height: 200px;
            border-radius: 50%;

            background-color: var(--violet-color-light);
        }

        h3 {
            margin-top: 30px;
            text-align: center;
        }

        .icons {
            display: flex;
            justify-content: center;
            gap: 10px;
            margin-top: 20px;
            text-align: center;
        }
        .icons i {
            font-size: 24px;
            cursor: pointer;
        }
        .icons i:hover {
            color: var(--violet-color-light);
        }
    }
`