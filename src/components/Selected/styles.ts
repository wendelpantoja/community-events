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
        font-size: 14px;
        color: #384633;
        font-weight: 500;
        background-color: #FFF;
        cursor: pointer;

        .box_icons i {
            font-size: 25px;
            color: #00856F;
        }
    }

    .body_select {
        position: absolute;
        top: 52px;
        width: 271px;
        height: auto;
        border-radius: 10px;
        padding: 5px 10px;
        font-size: 14px;
        color: #384633;
        margin-top: 5px;
        background-color: #FFF;
        box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1);
        

        .option {
            width: 100%;
            height: 35px;
            line-height: 35px;
            padding-left: 10px;
            cursor: pointer;
        }

        .option:hover {
            background-color: #DCE9E2;
            border-radius: 10px;
        }
    }

`