import styled from "styled-components";


export const ContainerEventsComponet = styled.section`
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 20px;

    .container_type_event {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .container_icons {
            display: flex;
            align-items: center;
            gap: 13px;

            svg {
                width: 32px;
                height: 32px;
                cursor: pointer;
            }
            svg:nth-child(2) {
                color: #00856F;
            }
        }
    }

    .container_cards {
        display: flex;
        align-items: center;
        gap: 65px;
        margin-top: 56px;
        padding: 0px 66px;
    }
`