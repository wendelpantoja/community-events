import styled from "styled-components"

export const Layout = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #DCE9E2;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const HeaderDash = styled.div`
    width: 100%;
    height: 70px;
    line-height: 70px;
    background-color: white;
    color: black;
`
export const ContainerElemens = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
        width: 25px;
        height: 25px;
        cursor: pointer;
    }
`

export const ContainerDash = styled.div`
    width: 95%;
    max-width: 1280px;
    height: 850px;
    background-color: white;
    margin: 0 auto;
    padding: 20px;
    border-radius: 24px;
    .links {
        display: flex;
        align-items: center;
        gap: 20px;

        a {
            font-size: 18px;
            color: black;
            font-weight: 600;
        }

        a:hover {
            color: #00856F;
        }
    }
    
`