import styled from "styled-components";

const DisplayFlex = styled.div`
    display: flex;
    align-items: center;
`

export const HeaderComponent = styled.header`
    width: 100%;
    height: var(--header-height);
    line-height: var(--header-height);
`

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 100%;
`

export const Logo = styled(DisplayFlex)`
    h2 {
        font-size: var(--h2-font-size);
        font-weight: var(--font-semi-bold);
        color: var(--logo-color-black);
    }
    span {
        font-size: var(--h2-font-size);
        font-weight: var(--font-bold);
        color: var(--logo-color-violet);
    }
`

export const Menu = styled.div`
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
`

export const ContainerButtons = styled(DisplayFlex)`
    gap: 10px;
`

export const ButtonConect = styled.button`
    width: 100px;
    height: 45px;

    color: var(--text-color-violet);

    font-size: var(--small-font-size);
    font-weight: var(--font-semi-bold);

    border: none;
    border-radius: 10px;
    background-color: var(--white-color);

    cursor: pointer;

    &:hover {
        background-color: var(--violet-color-light);
        border: 1px solid;
        border-color: var(--button-color-hover);
    }
`
export const ButtonCreate = styled(ButtonConect)`
    width: 135px;
    height: 45px;
    color: var(--text-color-white);
    background-color: var(--button-color);

    &:hover {
        color: var(--text-color-white);
        background-color: var(--button-bg-hover);
    }
`