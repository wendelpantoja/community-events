import styled from "styled-components";

export const ContainerFooter = styled.div`
    width: 100%;
    

    color: var(--text-color-white);

    background-color: var(--black-color);

    .box_footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 222px;
    }

    .logo_footer h3 {
        color: var(--text-color-white);
        font-weight: var(--font-semi-bold);
    }
    .logo_footer span {
        color: var(--text-color-white);
        font-size: var(--h3-font-size);
        font-weight: var(--font-bold);
    }
    

    .cripto p {
        font-size: var(--small-font-size);
        font-weight: var(--font-medium);
    }

    // ========== MEDIA MOBILE ============
    @media (max-width: 630px) {
        .box_footer {
            width: 100%;
            position: relative;
            flex-direction: column;
            justify-content: center;
        }

        .cripto p {
            width: 100%;
            text-align: center;
            position: absolute;
            left: 50%;
            bottom: 10px;

            transform: translateX(-50%);
        }
    }
`
