import styled from "styled-components"

export const ContainerInput = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: center;
    margin: 0 auto;
    margin-top: 20px;

    label {
        margin-bottom: 5px;
    }

    .input {
        display: flex;
        align-items: center;
        width: 100%;
        height: 54px;
        border: 1.5px solid lightgray;
        border-radius: 8px;
        padding-left: 10px;

        svg {
            color: lightgray;
        }

        input {
            width: 100%;
            height: 100%;
            border: none;
            padding-left: 8px;
            border-radius: 8px;
            outline: none;
        }
    }
`