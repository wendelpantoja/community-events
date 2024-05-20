import styled from "styled-components";

export const CardComponent = styled.div`
    width: 100%;
    max-width: 265px;
    max-height: 300px;
    background-color: var(--white-color);
    border-radius: 10px;
    flex: 1 1 280px;
    box-shadow: -5px 5px 10px 2px rgba(196, 196, 196, 0.20);

    cursor: pointer;

    .container_img {
        position: relative;

        width: 100%;
        height: 147px;

        border-radius: 10px 10px 0px 0px;
        background: #C4C4C4;

    }
    .container_img img {
        width: 100%;
        height: 100%;
        border-radius: 10px 10px 0px 0px;
    }
    .container_img
    .container_icons {
        position: absolute;
        right: 0;
        width: 35px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 5px;

        background-color: var(--white-color);
        
        padding: 5px 0;
        margin-top: 10px;
        margin-right: 15px;

        border-radius: 10px;

        z-index: 100;

        i:nth-child(1) {
            font-size: 20px;
            color: var(--violet-color);
        }
        i:nth-child(2) {
            font-size: 20px;
            color: var(--violet-color);
        }
        i:hover {
            color: var(--button-hover-light);
        }
    }

    .container_descriptions {
        position: relative;
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .container_descriptions
    .type_event {
        position: absolute;
        top: -15px;
        right: 20px;
        padding: 5px 10px;
        background-color: var(--violet-color);
        text-align: center;
        color: var(--white-color);
        font-size: var(--small-font-size);
        font-weight: var(--font-medium);

        border-radius: 5px;
    }
    .container_descriptions > p {
        color: var(--black-color);
        font-size: var(--smaller-font-size);
        font-weight: var(--font-medium);
    }
    .container_descriptions
    .container_title {
        width: 100%;
        height: 40px;
    }
    .container_descriptions
    .container_title p {
        color: var(--black-color);
        font-weight: var(--font-bold);
    }
    .container_descriptions
    .footer_card {
        display: flex;
        align-items: center;
        justify-content: space-between;

        p {
            color: var(--balck-color);
            font-size: var(--smaller-font-size);
        }
    }
`