import styled from "styled-components";

export const ContainerFile = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;

    input {
        visibility: hidden;
    }

`

export const Label = styled.label`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    border: 3px dashed lightgray;
    cursor: pointer;

    img {
        min-width: 100%;
        min-height: 100%;
    }
    i {
        font-size: 40px;
        color: lightgray;
    }
`