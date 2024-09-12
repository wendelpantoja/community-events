import styled from "styled-components"

export const ContainerSpin = styled.div`
    width: 20px;
    height: 20px;
    margin: 0 auto;

    .spin {
        width: 100%;
        height: 100%;

        border-radius: 50%;
        border: 3px solid var(--color-border-edit);
        border-top: 3px solid var(--bg-button-edit);
        border-right: 3px solid var(--bg-button-edit);

        animation: 1.3s linear infinite spin;
    }

    .spin_gray {
        width: 100%;
        height: 100%;

        border-radius: 50%;
        border: 3px solid #C4C4C4;
        border-top: 3px solid transparent;
        border-right: 3px solid transparent;

        animation: 1.3s linear infinite spin;
    }
    .spin_violet {
        width: 100%;
        height: 100%;

        border-radius: 50%;
        border: 3px solid var(--violet-color-light);
        border-top: 3px solid transparent;
        border-right: 3px solid transparent;

        animation: 1.3s linear infinite spin;
    }

    @keyframes spin {
        to {
            transform:  rotate(360deg);
        }
    }
`