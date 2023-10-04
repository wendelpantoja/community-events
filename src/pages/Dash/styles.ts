import styled from "styled-components"

export const Layout = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #DCE9E2;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const HeaderDash = styled.div`
    width: 100%;
    height: 70px;
    line-height: 70px;
    background-color: white;
    color: black;
`
export const ContainerElemens = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
        width: 25px;
        height: 25px;
        cursor: pointer;
    }
`

export const ContainerDash = styled.div`
    position: relative;
    width: 95%;
    max-width: 1280px;
    height: 88.5vh;
    background-color: white;
    margin: 0 auto;
    padding: 20px;
    border-radius: 24px;
    .links {
        display: flex;
        align-items: center;
        gap: 20px;
    }

    .container_content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        max-width: 500px;
        text-align: center;
        padding: 20px;

        h2 {
            margin-bottom: 30px;
        }
    }
    .container_inputs {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;

        .title {
            width: 100%;
            height: 50px;
            font-size: 18px;
            outline: none;
        }

        textarea {
            width: 100%;
            height: 100px;
            font-size: 18px;
            outline: none;
        }

        .container_date_hour {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 50px;

            input:nth-child(1),
            input:nth-child(2) {
                height: 35px;
                padding: 5px;
            }
        }

        .file {
            margin: 0 auto;
        }
    }

    button {
        width: 250px;
        height: 40px;
        background-color: #00856F;
        border: none;
        margin-top: 30px;
        color: white;
        cursor: pointer;
    }
`