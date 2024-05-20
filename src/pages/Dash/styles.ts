import styled from "styled-components"

export const Layout = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: var(--violet-color-light);
`

export const HeaderDash = styled.div`
    width: 100%;
    height: 70px;
    line-height: 70px;

    background-color: var(--white-color);
    color: var(--violet-color);
`
export const ContainerElemens = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
        color: var(--black-color);
    }

    svg {
        width: 25px;
        height: 25px;
        cursor: pointer;
    }
    svg:hover {
        color: var(--button-hover-light);
    }
`

export const ContainerDash = styled.div`
    width: 98%;
    max-width: 1280px;
    height: 850px;

    background-color: var(--white-color);

    margin: 0 auto;
    padding: 20px;

    color: var(--text-color-black);

    border-radius: 10px;

    .links {
        position: relative;
    
        ul {
            position: relative;
            display: flex;
            gap: 30px;
            font-size: var(--small-font-size);
            font-weight: var(--font-semi-bold);
        }

        .active_link, .active_hover {
            position: relative;
        }
        .active_link::before,
        .active_hover:hover::before {
            content: '';
            position: absolute;
            bottom: -14px;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: var(--violet-color);
        }

    }

    overflow-x: auto;

    &::-webkit-scrollbar {
        width: 10px;          
    }

    &::-webkit-scrollbar-track {
        background: transparent;        
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--violet-color);
        border-radius: 10px;       
        border: 3px solid var(--white-color);  
    }
    
`