import styled from "styled-components";


export const ContainerEventsComponent = styled.section`
    margin-bottom: 50px;

    h3 {
        margin-top: 60px;
        text-align: center;
        color: #C4C4C4;
    }

    .container_spin {
        margin-top: 60px;
        text-align: center;
    }

    .container_swiper {
        position: relative;
        .swiper_slide {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 394px;
            padding-left: 40px;
            padding-right: 40px;
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
        color: var(--violet-color);
        background-color: var(--violet-color-light);
        border: none;
        border-radius: 10px;
        cursor: pointer;

        z-index: 10;
       

        i {
            font-size: var(--icon-font-size);
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
        color: var(--violet-color);
        background-color: var(--violet-color-light);
        border: none;
        border-radius: 10px;
        cursor: pointer;
        
        z-index: 10;

        i {
            font-size: var(--icon-font-size);
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
    font-size: var(--p-font-size);
    text-align: center;
    color: var(--violet-color);
    background-color: var(--button-color);

    border-radius: 10px;

    cursor: pointer;

    &:hover {
        background-color: var(--button-hover);
    }
`