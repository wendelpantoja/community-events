import styled from "styled-components";

export const Header = styled.div`
    width: 100%;
    height: 90px;
    line-height: 90px;

    .nav_event {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .nav_event_logo h2, span {
            font-size: 20px;
            font-weight: 700;
        }

        .nav_event_logo span {
            color: #00856F;
        }

        .nav_event_button_login {
            width: 89px;
            height: 40px;
            background-color: #00856F;
            border: none;
            border-radius: 10px;
            font-weight: 500;
            color: white;

            cursor: pointer;
        }
    }
`

export const SectionImage = styled.section`
    width: 100%;
    height: 500px;
    border-radius: 10px;
    background-color: lightgrey;
    box-shadow: 0px 2px 13px -4px rgba(0,0,0,0.1);

    img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }
`

export const SectionInfo = styled.section`
    width: 100%;
    padding: 30px 40px;
    background-color: white;

    box-shadow: 0px 2px 13px -4px rgba(0,0,0,0.1);

    margin-top: 45px;

    .section_title_info {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .section_title_info
    .section_title_button {
        width: 180px;
        height: 55px;
        color: white;
        font-size: 16px;
        font-weight: 600;

        border: none;
        border-radius: 10px;

        background-color: #00856F;
        cursor: pointer;
    }

    .container_info {
        display: flex;
        flex-direction: column;
        gap: 10px;

        .title h2 {
            font-size: 30px;
        }

        .date_hour {
            display: flex;
            align-items: center;
            gap: 5px;
            color: #9B9B9B;

            i {
                font-size: 20px;
            }
        }

        .local {
            display: flex;
            align-items: center;
            gap: 5px;
            color: #9B9B9B;

            i {
                font-size: 20px;
            }
        }
    }


    .title_about {
        text-align: center;
        font-size: 20px;

        margin-bottom: 35px;
    } 

    .description_event {
        font-size: 18px;
        font-weight: 500;
        line-height: 30px;
    }
`