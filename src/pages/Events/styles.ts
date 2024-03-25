import styled from "styled-components";


export const SectionOne = styled.section`
    width: 100%;
    height: 452px;
    /* background-color: #DCE9E2; */
    position: relative;

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
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 875px;
    height: 150px;
    border-radius: 10px;
    background-color: #00856F;
    margin: 0 auto;
    margin-bottom: 80px;

    padding: 0px 35px;

    /* .container_search {
        position: relative;
        display: flex;
        justify-content: space-between;
        width: 100%;
    } */
    .search {
        display: flex;
        align-items: center;
        width: 100%;
        max-width: 450px;
        height: 50px;
        background-color: #FFF;
        border-radius: 10px;

        i {
            font-size: 20px;
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

        input::-webkit-input-placeholder {
            color: #384633;
            font-weight: 500;
            font-size: 14px;
        }
    }

    @media (max-width: 904px) {
        flex-direction: column;
        align-items: center;
        gap: 20px;
        height: auto;
        width: 97%;
        padding: 30px 20px;
        bottom: -200px;
    }
` 