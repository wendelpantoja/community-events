import styled from "styled-components"

export const ContainerForm = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 95%;
    max-width: 460px;
    border-radius: 24px;
    margin: 0 auto;
    background-color: white;
    padding: 50px 40px;

    .header_form {
        width: 100%;
        margin: 0 auto;

        .text-login {
            display: flex;
            align-items: center;
            gap: 8px;
            svg {
                font-size: 28px;
            }
        }
        p {
            margin-top: 5px;
            margin-bottom: 20px;
            font-size: 14px;
        }
    }
`

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;

    .container_inputs {
        width: 100%;
        display: flex;
        flex-direction: column;

        span {
            font-size: 12px;
            color: red;
        }
    }

    p {
        font-size: 15px;

        a {
            font-size: 15px;
            font-weight: 700;
        }
    }
`

export const Button = styled.button`
    width: 100%;
    height: 56px;
    font-weight: 600;
    background-color: #00856F;
    color: white;
    border: none;
    font-size: 16px;
    font-weight: 600;
    border-radius: 8px;
    cursor: pointer;
    margin-top: 20px;
`