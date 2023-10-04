import styled from "styled-components"

export const SectionIntroduction = styled.section`
    width: 100%;
    height: 475px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 10px;

    .container_introduction {
        display: flex;
        flex-direction: column;
        gap: 55px;
        h2 {
            width: 100%;
            max-width: 583px;
            color: black;
            font-size: 46px;
            font-weight: 700;
        }
        p {
            width: 100%;
            max-width: 583px;
            color: #555555;
            font-size: 18px;
            font-weight: 400;
        }
    }

    .image_introduction {
        width: 100%;
        max-width: 540px;
        height: 475px;

        img {
            width: 100%;
            height: 100%;
        }
    }


    @media (max-width: 950px) {
        height: auto;
        flex-direction: column-reverse;
        margin-bottom: 100px;

        .image_introduction {
            height: 400px;
            text-align: center;
        }
    }

`

export const SectionServices = styled.section`
    width: 100%;
    height: 500px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;

    margin-bottom: 30px;
    h2 {
        color: #00856F;
        font-size: 36px;
        font-weight: 700;
    }

    .container_cards {
        display: flex;
        align-items: center;
        gap: 70px;
    }
    .container_cards .card {
        width: 100%;
        max-width: 321px;
        height: 300px;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        border-radius: 15px;
        padding: 15px;
        text-align: center;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            gap: 30px;

            h3 {
            font-size: 24px;
            font-weight: 700;
        }

        p {
            font-size: 18px;
            font-weight: 400;
            text-align: center;
        }
    }

    @media (max-width: 904px) {
        height: auto;

        .container_cards {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 30px;
        }
    }

    @media (max-width: 637px) {
        .container_cards {
            grid-template-columns: 1fr;
        }
    }
`

export const SectionRectangle = styled.section<{
    $background: string, $colorH2: string, $color: string, $gap: string, $flex: string}>`
    width: 100%;
    height: 400px;
    background-color: ${(props) => props.$background};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${(props) => props.$gap};

    border-radius: 50px;
    margin-bottom: 30px;

    .informations {

        display: flex;
        flex-direction: column;
        align-items: baseline;
        gap: 25px;

        h2 {
            color: ${(props) => props.$colorH2};
            font-size: 36px;
            font-weight: 700;
        }

        p {
            width: 100%;
            max-width: 562px;
            color: ${(props) => props.$color};
            font-size: 24px;
            font-weight: 500;
            line-height: 34px;
        }
    }

    @media (max-width: 950px) {
        height: auto;
        flex-direction: ${(props) => props.$flex};
        gap: 0;
        padding-left: 20px;
        padding-right: 20px;
        padding-bottom: 60px;

        .image-rectangle {
            width: 100%;
            height: 100%;

            img {
                width: 100%;
            }
        }
    }
`

export const Button = styled.button<{
$background: string, 
$border: string,
$color: string}>`
    width: 170px;
    height: 50px;
    color: ${(props) => props.$color};
    border-radius: 10px;
    background-color: ${(props) => props.$background};
    border: ${(props) => props.$border};
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 10px;

    svg {
        margin-top: 1px;
    }
`
