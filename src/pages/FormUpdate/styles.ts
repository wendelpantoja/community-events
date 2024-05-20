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

    border: 3px dashed #C4C4C4;
    cursor: pointer;

    img {
        min-width: 100%;
        min-height: 100%;
    }
    
    i {
        font-size: 40px;
        color: #C4C4C4;
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
        font-weight: var(--font-semi-bold);
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

            font-size: var(--p-font-size);

            border: none;
            box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1);
            border-radius: 10px;

            outline: none;
            padding: 10px;
        }

        img {
            width: 40px;
            height: 50px;
        }

        textarea {
            width: 100%;
            height: 200px;
            font-size: var(--p-font-size);

            border: none;
            box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1);
            border-radius: 10px;

            padding: 10px;

            outline: none;
            resize: none;
        }

        .file {
            margin: 0 auto;
        }

    }

    .container_inputs
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
        
            border: none;
            box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1);
            border-radius: 10px;

            padding: 10px;
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
            
            border: none;
            box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1);
            border-radius: 10px;

            cursor: pointer;

            outline: none;
        }
    }

    button {
        width: 250px;
        height: 50px;

        background-color: var(--button-color);
        border: none;
        
        color: var(--text-color-white);
        font-weight: var(--font-bold);

        border-radius: 10px;
        cursor: pointer;

        margin-top: 35px;
    }

    button:hover {
        background-color: var(--button-hover);
    }

`