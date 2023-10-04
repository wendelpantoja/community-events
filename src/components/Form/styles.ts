import styled from "styled-components"

export const ContainerForm = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: auto;
    padding: 40px 25px;
    border-radius: 15px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    h2 {
        margin-bottom: 20px;
    }
`

export const FormComponent = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;

    .container_inputs {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
`

export const Button = styled.button`
    width: 100%;
    height: 50px;
    font-weight: 600;
    cursor: pointer;
`