import styled from "styled-components";

export const Header = styled.div`
    width: 100%;
    height: 90px;
    line-height: 90px;

    .nav_event {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .nav_event_logo > h3 {
            font-weight: var(--font-semi-bold);
        }
        .nav_event_logo span {
            font-weight: var(--font-bold);
        }

        .button_login {
            width: 89px;
            height: 40px;

            background-color: var(--white-color);
            border: none;
            border-radius: 10px;

            font-size: var(--small-font-size);
            font-weight: var(--font-bold);
            color: var(--text-color-violet);

            cursor: pointer;
        }
        .button_login:hover {
            border: 1px solid var(--button-hover);
            background-color: var(--violet-color-light);
        }
    }
`

export const SectionImage = styled.section`
    position: relative;
    width: 100%;
    height: 500px;
    border-radius: 10px;
    background-color: lightgrey;
    box-shadow: 0px 2px 13px -4px rgba(0,0,0,0.1);

    margin-bottom: 50px;

    img:nth-child(1) {
        position: relative;
        width: 100%;
        height: 100%;
        border-radius: 10px;
        z-index: 10;
    }
    img:nth-child(2) {
        position: absolute;
        left: 0;
        top: 6px;
        width: 100%;
        height: 500px;
        border-radius: 10px;

        filter: blur(10px);
        z-index: 5;
    }
`

export const SectionInfo = styled.section`
    width: 100%;
    padding: 30px 40px;
    background-color: white;
    border-radius: 10px;

    box-shadow: 0px 2px 13px -4px #C4C4C4;

    margin-bottom: 50px;

    .section_title_info {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .section_title_info
    .section_title_button {
        width: 180px;
        height: 55px;
        color: var(--text-color-white);
        font-size: var(--p-font-size);
        font-weight: var(--font-bold);

        border: none;
        border-radius: 10px;

        background-color: var(--button-color);
        cursor: pointer;
    }
    .section_title_info
    .section_title_button:hover {
        background-color: var(--button-hover);
    }

    .container_info {
        display: flex;
        flex-direction: column;
        gap: 10px;

        .title h2 {
            color: var(--text-color-black);
            font-weight: var(--font-bold);
        }
        .date_hour {
            display: flex;
            align-items: center;
            gap: 5px;
            color: var(--text-color-black);

            i {
                font-size: var(--h3-font-size);
            }

            p {
                font-weight: var(--font-medium);
            }
        }

        .local {
            display: flex;
            align-items: center;
            gap: 5px;

            i {
                font-size: var(--h3-font-size);
            }

            p {
                font-weight: var(--font-medium);
            }
        }
    }


    .title_about {
        text-align: center;
        font-size: 20px;

        margin-bottom: 35px;

        h2 {
            font-weight: var(--font-bold);
        }
    } 

    .description_event {
        font-size: 18px;
        font-weight: 500;
        line-height: 30px;

        p {
            font-weight: var(--font-medium);
        }
    }
`