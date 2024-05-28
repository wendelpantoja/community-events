import styled from "styled-components";

export const Modal = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100vw;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 100;

    .container_modal {
        position: absolute;
        top: 50px;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        max-width: 550px;
        background-color: var(--white-color);
        border-radius: 8px;
        padding: 40px;
    }

    .header_modal {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 25px;
    }
    .header_modal p {
        font-size: 16px;
        font-weight: var(--font-bold);
    }
    .header_modal i {
        font-size: var(--icon-font-size);
        cursor: pointer;
    }
    .header_modal i:hover {
        color: var(--icon-color-violet);
    }

    .description_product {
        font-size: 14px;
        font-weight: var(--font-regular);
        text-align: center;
        margin-bottom: 30px;
    }
    .description_product span {
        color: var(--text-color-black);
        font-weight: var(--font-bold);
    }

    .warning_modal {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-bottom: 40px;
        background-color: #fde4e4;
        border-left: 3px solid #dc2626;
        padding: 10px 10px;
        color: #dc2626;
    }
    .warning_modal
    .icon_warning {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .warning_modal
    .icon_warning p {
        font-size: var(--small-font-size);
        font-weight: var(--font-bold);
    }
    .warning_modal
    .message_warning {
        font-size: var(--small-font-size);
        margin-left: 26px;
        margin-top: 10px;
    }


    .buttons_modal {
        display: flex;
        align-items: center;
        justify-content: end;
        gap: 15px;
    }
    .buttons_modal button {
        width: 130px;
        height: 30px;
        border-radius: 8px;
        border: 2px solid;
        font-weight: 600;

        cursor: pointer;
    }
    .buttons_modal 
    .button_cancel {
        color: var(--button-color);
        background-color: var(--violet-color-light);
        border: 1px solid var(--button-color);
    }
    .buttons_modal
    .button_confirm {
        color: #dc2626;
        border: none;
        background-color: #fde4e4;

        p {
            font-size: var(--small-font-size);
        }
    }
    .buttons_modal
    .button_confirm:hover {
        color: #dc2626;
        border: 2px solid;
        border-color: #dc2626;
    }

    @media (max-width: 552px) {
        .container_modal {
            width: 98%;
            padding: 25px 15px;
        }
    }
`