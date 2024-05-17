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

    .logo_footer {
        h2 {
            font-weight: var(--font-semi-bold);
        }
        span {
            color: var(--text-color-white);
            font-size: var(--h2-font-size);
            font-weight: var(--font-bold);
        }
    }

    .cripto p {
        font-weight: var(--font-medium);
    }
`
