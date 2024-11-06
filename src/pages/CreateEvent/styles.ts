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
export const ContainerForm = styled.div`
    width: 100%;
    max-width: 500px;
    padding: 20px;
    margin: 0 auto;
    margin-top: 50px;

    h2 {
        text-align: center;
        font-weight: var(--font-semi-bold);
        margin-bottom: 30px;
    }

    .container_title {
        width: 100%;
        margin-top: 25px;

        label {
            font-size: var(--small-font-size);
            font-weight: var(--font-medium);
        }

        .title {
            width: 100%;
            height: 44px;
            border: 1px solid lightgray;
            border-radius: 10px;
            font-size: var(--small-font-size);
            padding: 10px;
            margin-top: 5px;
        }
        .title:focus {
            outline: 1px solid var(--violet-color);
        }
    }

    img {
        width: 40px;
        height: 50px;
    }

    .container_description {
        margin-top: 25px;

        label {
            font-size: var(--small-font-size);
            font-weight: var(--font-medium);
        }

        textarea {
            width: 100%;
            height: 200px;
            font-size: var(--p-font-size);
            border: 1px solid lightgray;
            border-radius: 10px;
            padding: 10px;
            resize: none;
            margin-top: 5px;
        }
        textarea:focus {
            outline: 1px solid var(--violet-color);
        }
    }

    .container_date_hour {
        width: 100%;

        display: flex;
        align-items: center;
        gap: 50px;

        margin-top: 25px;

        .container_date {
            width: 100%;
            label {
                font-size: var(--small-font-size);
                font-weight: var(--font-medium);
            }

            .react-datepicker-wrapper {
                width: 100%;
            }
            /* .react-datepicker-wrapper
            .react-datepicker__input-container {
                width: 100%;
            } */
            .react-datepicker-wrapper
            .react-datepicker__input-container input {
                width: 100%;
                height: 40px;
                border: 1px solid lightgray;
                border-radius: 10px;
                padding: 10px;
                margin-top: 5px;
                cursor: pointer;
                &:focus {
                    outline: 1px solid var(--violet-color);
                }
            }
            /* .react-datepicker-wrapper
            .react-datepicker__input-container input:focus-within {
                border: none;
            } */
        }
        .container_hour {
            width: 100%;

            label {
                font-size: var(--small-font-size);
                font-weight: var(--font-medium);
            }

            input {
                width: 100%;
                height: 40px;
                border: 1px solid lightgray;
                border-radius: 10px;
                padding: 10px;
                margin-top: 5px;
                cursor: pointer;
                outline-color: var(--violet-color);
            }
            input:focus {
                outline: 1px solid var(--violet-color);
            }
        }
    }

    .file {
        margin: 0 auto;
    }

    .selecteds {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 50px;

        margin-top: 25px;
        margin-bottom: 50px;

        .container_select {
            width: 100%;

            label {
                font-size: var(--small-font-size);
                font-weight: var(--font-medium);
            }

            select {
                width: 100%;
                height: 40px;
                
                border: 1px solid lightgray;
                border-radius: 10px;

                cursor: pointer;

                outline: none;

                margin-top: 5px;
            }
            select:focus {
                outline: 1px solid var(--violet-color);
            }
        }


    }

    .container_button {
        text-align: center;

        button {
            width: 200px;
            height: 50px;

            background-color: var(--button-color);
            border: none;
            
            color: var(--text-color-white);
            font-weight: var(--font-semi-bold);

            border-radius: 10px;
            cursor: pointer;
        }

        button:hover {
            background-color: var(--button-hover);
        }

    }

    @media (max-width: 466px) {
        padding: 0px;
    }

    @media (max-width: 416px) {
        .container_inputs
        .container_date_hour {
            flex-direction: column;
            gap: 10px;
        }
    }
`