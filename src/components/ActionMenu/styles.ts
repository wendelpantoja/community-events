import styled from "styled-components"

export const ContainerMenu = styled.div<{$activeMenu: string | undefined}>`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    width: 60%;
    height: 60vh;
    background-color: white;

    position: absolute;
    top: 0;
    right: ${(props) => props.$activeMenu};
    .close {
        position: absolute;
        top: 20px;
        right: 15px;
        font-size: 25px;
    }
    z-index: 100;
`
export const ContainerButtons = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    a > span {
        color: #FFCA28;
    }
`