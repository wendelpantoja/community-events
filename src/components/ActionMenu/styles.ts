import styled from "styled-components"

export const ContainerMenu = styled.div<{$activeMenu: string | undefined}>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    width: 60%;
    max-width: 300px;
    height: 60vh;
    background-color: white;
    border-radius: 0px 0px 0px 10px;
    box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1);

    padding: 20px;

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
    align-items: end;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    ul li:nth-child(1){
        text-align: end;
    }

    a > span {
        color: #FFCA28;
    }
`