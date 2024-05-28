import styled from "styled-components";

export const ContainerPagination = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    justify-items: center;
    max-width: 1230px;
    height: 100%;
    margin: 0 auto;
    margin-bottom: 80px;

    @media (max-width: 1136px) {
        grid-template-columns: repeat(3, 1fr);
        grid-row-gap: 40px;
    }

    @media (max-width: 866px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 578px) {
        grid-template-columns: 1fr;
    }
`