import styled from "styled-components";

export const ContainerFile = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;

    input {
        visibility: hidden;
    }

`

export const Label = styled.label`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    border: 3px dashed lightgray;
    cursor: pointer;

    img {
        min-width: 100%;
        min-height: 100%;
    }
    
    i {
        font-size: 40px;
        color: lightgray;
    }
`
export const ContainerContent = styled.div`
    width: 100%;
    max-width: 500px;
    text-align: center;
    padding: 20px;
    margin: 0 auto;
    margin-top: 50px;

    h2 {
        font-size: 30px;
        font-weight: 600;
        margin-bottom: 30px;
    }

    
    .container_inputs {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;

        .title {
            width: 100%;
            height: 55px;
            font-size: 18px;
            padding: 10px;
            outline: none;
            border: none;
            box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1);
            border-radius: 10px;
        }

        img {
            width: 40px;
            height: 50px;
        }

        textarea {
            width: 100%;
            height: 200px;
            font-size: 18px;
            padding: 10px;
            outline: none;
            resize: none;
            border: none;
            box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1);
            border-radius: 10px;
        }

        .container_date_hour {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 50px;

            input:nth-child(1),
            input:nth-child(2) {
                width: 155px;
                height: 40px;
                padding: 10px;
                border: none;
                box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1);
                border-radius: 10px;
            }
        }

        .file {
            margin: 0 auto;
        }
    }

    .selecteds {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;
        margin-top: 30px;

        select {
            width: 155px;
            height: 40px;
            outline: none;
            border: none;
            box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1);
            border-radius: 10px;
            cursor: pointer;
        }
    }

    button {
        width: 250px;
        height: 40px;
        background-color: #00856F;
        border: none;
        margin-top: 35px;
        color: white;
        font-weight: 600;
        border-radius: 10px;
        cursor: pointer;
    }

`