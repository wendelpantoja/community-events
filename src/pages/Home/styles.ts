import styled from "styled-components"

export const Introduction = styled.section`
    display: flex;
    align-items: center;
    gap: 45px;
    width: 100%;
    height: 536px;

    .container_text
    .container_title {
        width: 100%;
        max-width: 666px;
    }
    .container_text
    .container_title h1 {
        color: var(--text-color-black);
        font-weight: var(--font-extra-bold);

        margin-bottom: 10px;
    }
    
    .container_text
    .container_subtitle p {
        width: 100%;
        max-width: 500px;
        color: var(--text-color-black);
        font-weight: var(--font-regular);

        margin-bottom: 45px;
    }

    .container_text
    .button_introduction {
        width: 170px;
        height: 50px;

        border: none;
        border-radius: 10px;

        color: var(--text-color-white);
        background-color: var(--button-color);

        font-size: var(--small-font-size);
        font-weight: var(--font-semi-bold);

        cursor: pointer;
    }
    .container_text
    .button_introduction:hover {
        background-color: var(--button-hover);
    }

    // ========= CONTAINER IMAGENS ==========
    .container_photos {
        max-width: 450px;
        position: relative;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
        grid-gap: 20px;
    }
    .container_photos 
    img:nth-child(1) {
        position: relative;
        width: 100%;
        height: 100%;
        max-width: 235px;
        grid-column: 1;
        grid-row: 1 / 2;

        border-radius: 10px;
        z-index: 10;
    }
    .container_photos 
    img:nth-child(3) {
        position: relative;
        width: 100%;
        height: 100%;
        max-width: 235px;
        grid-column: 1;
        grid-row: 2 / 3;

        border-radius: 10px;
        z-index: 10;
    }
    .container_photos
    img:nth-child(5) {
        position: relative;
        width: 100%;
        height: 100%;
        max-width: 235px;
        grid-column: 2;
        grid-row: 1 / 3;

        border-radius: 10px;
        z-index: 10;
    }

    // ========== EFECT FILTER BLUR =========
    .container_photos
    img:nth-child(2) {
        position: absolute;
        height: 165px;
        top: 0;
        left: 0;
        z-index: 5;
        filter: blur(25px);
    }
    .container_photos
    img:nth-child(4) {
        position: absolute;
        height: 125px;
        left: 0;
        bottom: 0;
        z-index: 5;
        filter: blur(25px);
    }
    .container_photos
    img:nth-child(6) {
        position: absolute;
        height: 100%;
        top: 0;
        right: 0;
        z-index: 5;
        filter: blur(25px);
    }

    // ========== MEDIA TABLET =========
    @media (max-width: 940px) {

        & {
            flex-direction: column;
            gap: 70px;
        }

        // =========== BUTTON ==========
        
        .container_text
        .button_introduction {
            width: 140px;
            height: 44px;
        }

    }
`

export const Services = styled.section`

    h2 {
        font-weight: var(--font-bold);
        color: var(--text-color-black);

        text-align: center;

        margin-top: 64px;
        margin-bottom: 50px;
    }

    .container_cards {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-items: center;
        grid-column-gap: 70px;

        max-width: 1000px;
        margin: 0 auto;
    }

    .container_cards
    .card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        height: 275px;

        padding: 0 20px;

        color: var(--icon-color-white);

        border-radius: 10px;
        background-color: var(--violet-color);

        i {
            font-size: 50px;
            margin-bottom: 5px;
        }
        h3 {
            font-weight: var(--font-bold);
            margin-bottom: 14px;
        }
        p {
            font-weight: var(--font-regular);
            line-height: var(--smaller-line-height);
        }
    }

    // =========== MEDIA TABLET ===========
    @media (max-width: 942px) {
        h2 {
            font-size: 24px;
        }
        & {
            margin-top: 200px;
        }

        .container_cards {
            width: 100%;
            max-width: 700px;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 40px;
        }
    }

    // ========== MEDIA MOBILE ==========
    @media (max-width: 630px) {
        .container_cards {
            max-width: 350px;
            grid-template-columns: 1fr;
        }
    }
`

export const Differential = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: auto;
    background: var(--bg-gradient-differ);

    border-radius: 10px;

    padding: 120px 30px;
    margin-top: 64px;

    .container_differ {
        display: flex;
        align-items: center;
        gap: 119px;
    }

    .container_differ
    .container_img {
        position: relative;
    }

    .container_differ
    .container_img img {
        position: relative;
        width: 328px;
        height: 392px;

        border-radius: 10px;
        z-index: 10;
    }

    // =========== Efect filter blur ===========
    .container_differ
    .img01 img:nth-child(2){
        position: absolute;
        left: 0;
        z-index: 5;
        filter: blur(25px);
    }
    .container_differ
    .img02 img:nth-child(2){
        position: absolute;
        right: 0;
        z-index: 5;
        filter: blur(25px);
    }

    .container_text {
        width: 100%;
        max-width: 471px;

        h2 {
            font-weight: var(--font-bold);
            margin-bottom: 20px;
        }
        h4 {
            font-weight: var(--font-regular);
            line-height: var(--small-line-height);
        }
    }

    // ========== MEDIA TABLET ==========
    @media (max-width: 942px) {
        padding: 120px 20px;
        & {
            gap: 150px;
        }
        .container_differ {
            gap: 50px;
        }
        .container_differ
        .container_img img {
            width: 230px;
            height: 300px;
        }
        .container_text {
            max-width: none;
        }
    }

    // ===========  MEDIA MOBILE ===========
    @media (max-width: 630px) {
        & {
            gap: 100px;
        }
        .container_differ {
            flex-direction: column;
        }
        .differ02 {
            flex-direction: column-reverse;
        }
    }
`

export const Start = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    width: 100%;
    height: 324px;

    padding: 0px 70px;

    .container_text {
        width: 100%;
        max-width: 378px;
        color: var(--text-color-black);

        h2 {
            font-weight: var(--font-extra-bold);
            margin-bottom: 5px;
        }
        p {
            font-weight: var(--font-regular);
            line-height: var(--smaller-line-height);
        }
    }

    .button_start {
        width: 170px;
        height: 50px;

        border: none;
        border-radius: 10px;

        color: var(--text-color-white);
        background-color: var(--button-color);

        font-size: var(--small-font-size);
        font-weight: var(--font-semi-bold);

        cursor: pointer;
    }

    .button_start:hover {
        background-color: var(--button-hover);
    }

    // ========== MEDIA TABLET ===========
    @media (max-width: 942px) {
        padding: 0 20px;
        .button_start {
            width: 130px;
            height: 45px;
        }
    }

    // =========== MEDIA MOBILE ===========
    @media (max-width: 660px) {
        & {
            text-align: center;
            flex-direction: column;
            justify-content: center;
            gap: 48px;
        }
    }
`
