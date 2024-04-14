import styled from "styled-components";


export const ContainerEventsComponent = styled.section`
    margin-bottom: 70px;

    h1 {
        margin-bottom: 25px;
    }

    .container_swiper {
        position: relative;

        .swiper_slide {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 394px;
            padding-left: 20px;
            padding-right: 20px;
        }
    }

    .swiper-horizontal {
        padding-bottom: 20px;
    }

    .button_prev {
        width: 50px;
        height: 45px;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        z-index: 10;
        color: #00856F;
        background-color: #DCE9E2;
        border: none;
        border-radius: 10px;
        cursor: pointer;
       

        i {
            font-size: 24px;
        }
    }
    .button_prev.desable {
        display: none;
    }
    
    .button_next {
        width: 50px;
        height: 45px;
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        z-index: 10;
        color: #00856F;
        background-color: #DCE9E2;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        

        i {
            font-size: 24px;
        }
    }

    .button_next.desable {
        display: none;
    }
`

export const PlusEvents = styled.div`
    width: 100px;
    height: 70px;
    line-height: 70px;
    font-size: 16px;
    text-align: center;
    color: white;
    background-color: #00856F;

    border-radius: 10px;

    cursor: pointer;

    &&:hover {
        background-color: #03C5A5;
    }
`