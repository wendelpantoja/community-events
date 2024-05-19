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
`
