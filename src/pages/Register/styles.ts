import styled from "styled-components"

export const ContainerForm = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 95%;
    max-width: 460px;

    border-radius: 24px;
    background-color: white;

    margin: 0 auto;
    padding: 50px 40px;

    .header_form {
        width: 100%;
        margin: 0 auto;
        margin-bottom: 20px;
    }

    @media (max-width: 480px) {
        padding: 0;
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
            font-size: var(--smaller-font-size);
            color: var(--text-color-violet);
        }

        i {
            color: #C4C4C4;
        }
    }
    p {
        font-size: var(--p-font-size);

        a {
            font-size: var(--p-font-size);
            font-weight: var(--font-bold);
            text-decoration: blink;
        }
    }

    a:hover {
        color: var(--text-color-violet);
    }
    a {
        text-decoration: underline;
    }
    
`

export const Button = styled.button`
    width: 100%;
    height: 56px;
    
    background-color: var(--button-color);
    color: var(--text-color-white);
    
    font-size: var(--p-font-size);
    font-weight: var(--font-semi-bold);

    border: none;
    border-radius: 8px;
    cursor: pointer;

    margin-top: 20px;

    &:hover {
        background-color: var(--button-hover);
    }

    @media (max-width: 480px) {
        height: 50px;
    }
`