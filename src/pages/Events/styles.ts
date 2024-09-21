import styled from "styled-components";


export const Banner = styled.section`
    width: 100%;
    height: 362px;
    background-image: url("/assets/img/banner.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    
    .bg_banner {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        color: var(--text-color-white);
        background-color: var(--bg-banner);

        text-align: center;
    }
`

export const SearchEvents = styled.div`
    position: relative;
    top: -50px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;

    max-width: 875px;
    height: 200px;

    border-radius: 10px;
    background-color: var(--violet-color);

    margin: 0 auto;
    margin-bottom: 80px;

    padding: 0px 35px;

    z-index: 10;

    .search {
        display: flex;
        align-items: center;
        width: 100%;
        
        height: 50px;
        background-color: #FFF;
        border-radius: 10px;

        i {
            font-size: 20px;
            color: var(--icon-color-violet);
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
            font-size: var(--small-font-size);
        }
    }

    .container_select {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    @media (max-width: 904px) {
        width: 97%;
        padding: 30px 20px;
    }

    // =========== MEDIA MOBILE ==========
    @media (max-width: 630px) {
        height: auto;
        .container_select {
            width: 100%;
            gap: 10px;
        }

        .search input::-webkit-input-placeholder {
            font-size: var(--p-font-size);
        }
    }
` 