import styled from "styled-components";

export const HeaderComponent = styled.header`
    width: 100%;
    height: 88px;
    line-height: 88px;
    background-color: transparent;
    .menu {
        display: none;
    }

    .navegation {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .links-list ul {
            display: flex;
            align-items: center;
            gap: 40px;
        }

    }

    .list li a {
        font-weight: 500;
    }

    .list li a:hover {
        color: #00856F;
    }

    .logo h2, span {
        font-size: 20px;
        font-weight: 700;
    }

    .logo span {
        color: #00856F;
    }

    .buttons {
        display: flex;
        align-items: center;
        gap: 45px;
    }

    @media (max-width: 904px) {
        .links-list {
            display: none;
        }

        .buttons {
            display: none;
        }

        .menu {
            display: block;
            cursor: pointer;

            svg{
                font-size: 25px;
                cursor: pointer;
            }
        }
    }
`

export const Button = styled.button<{
$background: string, 
$border: string,
$color: string}>`
    font-size: 14px;
    font-weight: 500;
    width: 130px;
    height: 40px;
    color: ${(props) => props.$color};
    border-radius: 10px;
    background-color: ${(props) => props.$background};
    border: ${(props) => props.$border};
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
`