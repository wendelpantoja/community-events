import styled from "styled-components"

export const Introduction = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;

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

    .container_photos {
        position: relative;
        display: grid;
        grid-gap: 30px;
    }
    .container_img01 {
        grid-area: img01;
    }
    .container_img02 {
        grid-area: img02;
    }
    .container_img03 {
        grid-area: img03;
    }
    .container_photos {
        grid-template-areas: 
            "img01 img03"
            "img02 img03"
        ;
    }

    .container_photos
    .container_img01 img, 
    .container_img02 img {
        position: relative;
        width: 235px;
        height: 160px;
        border-radius: 10px;
        z-index: 10;
    }
    .container_photos
    .container_img03 img {
        position: relative;
        width: 200px;
        height: 100%;
        border-radius: 10px;
        z-index: 10;
    }

    // ========== Efect filter blur =========
    .container_photos
    .container_img01 img:nth-child(2) {
        position: absolute;
        height: 165px;
        left: 0;
        z-index: 5;
        filter: blur(25px);
    }
    .container_photos
    .container_img02 img:nth-child(2) {
        position: absolute;
        height: 125px;
        left: 0;
        bottom: 0;
        z-index: 5;
        filter: blur(25px);
    }
    .container_photos
    .container_img03 img:nth-child(2) {
        position: absolute;
        height: 100%;
        right: 0;
        z-index: 5;
        filter: blur(25px);
    }
`

export const Services = styled.section`
    h2 {
        font-weight: var(--font-bold);
        color: var(--text-color-black);

        text-align: center;

        margin-top: 30px;
        margin-bottom: 100px;
    }

    .container_cards {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 104px;
    }

    .container_cards
    .card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 300px;
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
`

export const Differential = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 1176px;
    background: var(--bg-gradient-differ);

    border-radius: 10px;

    padding: 120px 0;
    margin-top: 130px;

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
            font-weight: var(--font-medium);
            line-height: var(--small-line-height);
        }
    }
`

export const Start = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
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
`
