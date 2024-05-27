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

    i {
        display: none;
    }

    i {
        font-size: 26px;
        color: var(--icon-color-violet);
        cursor: pointer;
    }

    @media (max-width: 942px) {
        i {
            display: block;
        }
    }
`

export const Logo = styled(DisplayFlex)`
    h3 {
        font-weight: var(--font-semi-bold);
        color: var(--logo-color-black);
    }
    span {
        font-size: var(--h3-font-size);
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

    @media (max-width: 942px) {
        & {
            display: none;
        }
    }

`

export const ContainerButtons = styled(DisplayFlex)`
    gap: 8px;

    @media (max-width: 942px) {
        & {
            display: none;
        }
    }
`

export const ButtonConect = styled.button`
    width: 115px;
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

    @media (max-width: 724px) {
        & {
            width: 100px;
        }
    }
`
export const ButtonCreate = styled(ButtonConect)`
    width: 130px;
    height: 45px;
    color: var(--text-color-white);
    background-color: var(--button-color);

    &:hover {
        border: 0;
        color: var(--text-color-white);
        background-color: var(--button-hover);
    }

    @media (max-width: 724px) {
        & {
            width: 115px;
            height: 40px;
        }
    }
`

// ========== MENU MOBILE ==========
export const ContainerMenuMobile = styled.div`
    position: fixed;
    top: 0;
    right: 0;

    width: 70%;
    max-width: 400px;
    height: 100vh;

    background-color: var(--white-color);
    box-shadow: -5px 5px 10px 2px rgba(196, 196, 196, 0.20);
    padding: 0 30px;
    z-index: 100;

    .container_close {
        width: 100%;
        height: var(--header-hight);
        line-height: var(--header-hight);
        text-align: right;

        margin-top: 8px;
        i {
            font-size: 30px;
            color: var(--icon-color-violet);
            cursor: pointer;
        }
    }
`
export const MenuMobile = styled.div`
    position: relative;
    
    ul {
        position: relative;
        display: flex;
        flex-direction: column;
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

export const ContainerButtonsMobile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: baseline;
`