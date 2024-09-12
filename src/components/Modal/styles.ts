import styled from "styled-components"

export const ContainerModal = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 20;
`

export const BoxModal = styled.div`
    width: 95%;
    max-width: 500px;
    padding: 30px 15px;
    background-color: var(--white-color);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;

    color: var(--text-color-black);

    border-radius: 10px;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    h2 {
        font-weight: var(--font-bold);
    }

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

    font-weight: var(--font-semi-bold);
`