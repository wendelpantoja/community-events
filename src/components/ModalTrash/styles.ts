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
        background-color: white;
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
        font-weight: 600;
    }
    .header_modal i {
        font-size: 22px;
        cursor: pointer;
    }
    .header_modal i:hover {
        color: #dc2626;
    }

    .description_product {
        font-size: 14px;
        font-weight: 400;
        text-align: center;
        margin-bottom: 30px;
    }
    .description_product span {
        font-weight: 600;
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
        font-size: 14px;
        font-weight: 600;
    }
    .warning_modal
    .message_warning {
        font-size: 14px;
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
        color: #399976;
        background-color: #ecfdf5;
        border-color: #399976;
    }
    .buttons_modal
    .button_confirm {
        color: #dc2626;
        border: none;
        background-color: #fde4e4;
    }
    .buttons_modal
    .button_confirm:hover {
        color: #dc2626;
        border: 2px solid;
        border-color: #dc2626;
    }

`