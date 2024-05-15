import styled from "styled-components";

export const ContainerButtons = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    margin-top: 55px;


    .buttonShow {
        width: 45px;
        height: 35px;
        background-color: white;
        border: 1px solid;
        border-radius: 8px;
        cursor: pointer;

        i {
            font-size: 20px;
            font-weight: 500;
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
        color: white;
        font-weight: 600;
        border: none;
        border-radius: 8px;
        cursor: pointer;
    }

    .buttonShow_left {
        color: #00856F;
        background-color: transparent;
        border: 2px solid #00856F;
    }

    .buttonShow_left:hover {
        border-color: #03C5A5;

        i {
            color: #03C5A5;
        }
    }

    .buttonShow_right {
        color: white;
        background-color: #00856F;
        border: none;
    }

    .buttonShow_right:hover {
        background-color: #03C5A5;
    }
`