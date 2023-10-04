import styled from "styled-components"

export const ContainerModal = styled.div`
    width: 95%;
    max-width: 500px;
    padding: 30px 15px;
    background-color: white;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;

    color: black;

    border-radius: 10px;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .container_buttons button:nth-child(1) {
        margin-right: 40px;
    }
`

export const Button = styled.button`
    width: 130px;
    height: 40px;
    background-color: ${(props) => props.color};
    color: white;
    border: 0;
    border-radius: 10px;
    cursor: pointer;

    font-weight: 600;
`