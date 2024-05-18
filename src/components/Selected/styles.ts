import styled from "styled-components";


export const ContainerSelected = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 2px;
    height: auto;
    

    .header_select {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 271px;
        height: 50px;
        border-radius: 10px;
        padding: 5px 10px;
        font-size: var(--small-font-size);
        color: var(--black-color-light);
        font-weight: var(--font-medium);
        background-color: var(--white-color);
        cursor: pointer;

        .box_icons i {
            font-size: var(--icon-font-size);
            color: var(--icon-color-violet);
        }
    }

    .body_select {
        position: absolute;
        top: 52px;
        width: 271px;
        height: auto;
        border-radius: 10px;
        padding: 5px 10px;
        font-size: var(--small-font-size);
        color: var(--black-color-light);
        margin-top: 5px;
        background-color: var(--white-color);
        box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1);
        

        .option {
            width: 100%;
            height: 35px;
            line-height: var(--small-line-height);
            padding-left: 10px;
            cursor: pointer;
        }

        .option:hover {
            color: var(--violet-color);
            background-color: var(--violet-color-light);
            border-radius: 10px;
        }
    }

`