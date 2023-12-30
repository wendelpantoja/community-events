import styled from "styled-components"

export const ContainerCardsDash = styled.div`
    width: 100%;
    height: 100%;
    overflow-x: auto;

    .text h2 {
        text-align: center;
        margin-top: 70px;
        margin-bottom: 70px;
    }

    .container_cards {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;
        flex-wrap: wrap;
        width: 100%;
        margin: 0 auto;
    }
`