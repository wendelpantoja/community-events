import styled from "styled-components";


export const SectionOne = styled.section`
    width: 100%;
    height: 452px;
    /* background-color: #DCE9E2; */
    position: relative;
    margin-bottom: 169px;

    .container_text {
        width: 100%;
        max-width: 700px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .container_text h2 {
        font-size: 48px;
        font-weight: 700;
        text-align: center;
        color: #000;
    }
`

export const SearchEvents = styled.div`
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
    bottom: -130px;
    width: 100%;
    max-width: 875px;
    height: 200px;
    border-radius: 10px;
    background-color: #00856F;

    .container_search {
        max-width: 699px;
        margin: 0 auto;
        padding-top: 29px;
    }

    .container_search
    .search {
        display: flex;
        align-items: center;
        width: 100%;
        height: 54px;
        background-color: #FFF;
        border-radius: 10px;

        svg {
            width: 18px;
            height: 18px;
            color: #00856F;
            margin-left: 21px;
        }

        input {
            width: 100%;
            height: 100%;
            border-radius: 10px;
            border: none;
            outline: none;
            padding-left: 15px;
        }
    }

    .container_search
    .selecteds {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        select {
            width: 271px;
            height: 50px;
            border-radius: 10px;
            margin-top: 38px;
            color: gray;
        }
    }

    @media (max-width: 904px) {
        height: auto;
        width: 97%;
        padding: 0px 20px;
        bottom: -200px;

        .selecteds {
            flex-direction: column;
            padding-bottom: 20px;
        }
    }
` 