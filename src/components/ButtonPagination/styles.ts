import styled from "styled-components";

export const ContainerButtons = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    margin-top: 55px;
    margin-bottom: 55px;


    .buttonShow {
        width: 45px;
        height: 35px;
        border: 1px solid;
        border-radius: 8px;
        cursor: pointer;

        i {
            font-size: var(--h3-font-size);
            font-weight: var(--font-medium);
        }
    }

    .buttons {
        display: flex;
        align-items: center;
        gap: 3px;
    }

    .buttons .button {
        width: 20px;
        height: 25px;
        font-weight: var(--font-bold);
        border: none;
        border-radius: 10px;
        cursor: pointer;
    }

    .buttonShow_left {
        color: var(--violet-color);
        background-color: var(--white-color);
        border: 1px solid var(--button-color);
    }

    .buttonShow_left:hover {
        border-color: var(--button-hover-light);

        i {
            color: var(--button-hover-light);
        }
    }

    .buttonShow_right {
        color: var(--white-color);
        background-color: var(--button-color);
        border: none;
    }

    .buttonShow_right:hover {
        background-color: var(--button-hover-light);
    }
`