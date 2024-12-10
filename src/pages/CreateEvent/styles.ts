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

    #component-error-text {
        color: red;
    }

    #label {
        position: relative;
        bottom: 8px;

        font-size: var(--small-font-size);
        font-weight: var(--font-medium);
    }

    .container_title {
        width: 100%;
        margin-top: 20px;
    }

    .container_title
    .MuiFormControl-root {
        height: 40px;
    }
    .container_title
    .MuiFormControl-root label {
        font-size: var(--small-font-size);
        font-weight: var(--font-medium);
    }

    .container_title
    .MuiFormControl-root
    .MuiFormLabel-root {
        font-size: 14px;
        left: 15px;
        top: 50%;
        transform: translateY(-50%);
        font-family: "Montserrat", sans-serif;
    }

    .container_title
    .MuiFormControl-root
    .MuiInputBase-root {
        height: 100%;
    }

    .container_title
    .MuiFormControl-root
    .MuiFormLabel-root.Mui-focused {
        display: none;
    }

    .container_title
    .MuiFormControl-root
    .css-113d811-MuiFormLabel-root-MuiInputLabel-root {
        position: static;
    }

    .container_title
    .MuiInputBase-input {
        font-family: "Montserrat", sans-serif;
        color: black;
    }

    .container_title
    .MuiOutlinedInput-notchedOutline
    .css-w1u3ce {
        max-width: 0;
    }

    .container_title
    .MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline {
        border-color: var(--violet-color);
    }

    .container_title
    .title {
        width: 100%;
        height: 44px;
        border: 1px solid lightgray;
        border-radius: 10px;
        font-size: var(--small-font-size);
        padding: 10px;
        margin-top: 5px;
    }
    .container_title
    .title:focus {
        outline: 1px solid var(--violet-color);
    }

    img {
        width: 40px;
        height: 50px;
    }

    .container_description {
        margin-top: 20px;

        label {
            font-size: var(--small-font-size);
            font-weight: var(--font-medium);
        }

        .MuiFormControl-root
        .MuiFormLabel-root {
            font-size: 14px;
            font-family: "Montserrat", sans-serif;
        }

        .MuiFormControl-root
        .MuiInputBase-root {
            height: 100%;
        }

        .MuiFormControl-root
        .MuiFormLabel-root.Mui-focused {
            display: none;
        }

        .MuiFormControl-root
        .css-113d811-MuiFormLabel-root-MuiInputLabel-root {
            position: static;
            display: none;
        }

        .MuiInputBase-input {
            font-family: "Montserrat", sans-serif;
            color: black;
        }

        .MuiOutlinedInput-notchedOutline
        .css-w1u3ce {
            max-width: 0;
        }

        .MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline {
            border-color: var(--violet-color);
        }
    }

    .container_date_hour {
        width: 100%;

        display: flex;
        align-items: center;
        gap: 50px;
        margin-top: 20px;

        .container_date {
            width: 100%;

            label {
                font-size: var(--small-font-size);
                font-weight: var(--font-medium);
            }

            .MuiFormControl-root {
                height: 40px;
            }

            .MuiFormControl-root
            .MuiFormLabel-root {
                font-size: 14px;
                left: 15px;
                top: 50%;
                transform: translateY(-50%);
                font-family: "Montserrat", sans-serif;
            }

            .MuiFormControl-root
            .MuiInputBase-root {
                height: 100%;
            }

            .MuiFormControl-root
            .MuiFormLabel-root.Mui-focused {
                display: none;
            }

            .MuiFormControl-root
            .css-113d811-MuiFormLabel-root-MuiInputLabel-root {
                position: static;
            }

            .MuiInputBase-input {
                font-family: "Montserrat", sans-serif;
                color: black;
                text-transform: lowercase;
            }

            .MuiOutlinedInput-notchedOutline
            .css-w1u3ce {
                max-width: 0;
            }

            .MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline {
                border-color: var(--violet-color);
            }
        }

        .container_hour {
            width: 100%;

            label {
                font-size: var(--small-font-size);
                font-weight: var(--font-medium);
            }

            .MuiFormControl-root {
                height: 40px;
            }

            .MuiFormControl-root
            .MuiFormLabel-root {
                font-size: 14px;
                left: 15px;
                top: 50%;
                transform: translateY(-50%);
                font-family: "Montserrat", sans-serif;
            }

            .MuiFormControl-root
            .MuiInputBase-root {
                height: 100%;
            }

            .MuiFormControl-root
            .MuiFormLabel-root.Mui-focused {
                display: none;
            }

            .MuiFormControl-root
            .css-113d811-MuiFormLabel-root-MuiInputLabel-root {
                position: static;
            }

            .MuiInputBase-input {
                font-family: "Montserrat", sans-serif;
                color: black;
            }

            .MuiOutlinedInput-notchedOutline
            .css-w1u3ce {
                max-width: 0;
            }

            .MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline {
                border-color: var(--violet-color);
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
        margin-top: 20px;

        .container_select {
            width: 100%;

            label {
                font-size: var(--small-font-size);
                font-weight: var(--font-medium);
            }

            .MuiFormControl-root {
                height: 40px;
            }

            .MuiFormControl-root
            .MuiFormLabel-root {
                font-size: 14px;
                left: 15px;
                top: 50%;
                transform: translateY(-50%);
                font-family: "Montserrat", sans-serif;
            }

            .MuiFormControl-root
            .MuiInputBase-root {
                height: 100%;
            }

            .MuiFormControl-root
            .MuiFormLabel-root.Mui-focused {
                display: none;
            }

            .MuiFormControl-root
            .css-113d811-MuiFormLabel-root-MuiInputLabel-root {
                position: static;
            }

            .MuiInputBase-input {
                font-family: "Montserrat", sans-serif;
                color: black;
            }

            .MuiOutlinedInput-notchedOutline
            .css-w1u3ce {
                max-width: 0;
            }

            .MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline {
                border-color: var(--violet-color);
            }
        }


    }

    .container_local {
        width: 100%;
        margin-top: 20px;

        .MuiFormControl-root {
            height: 40px;
        }

        .MuiFormControl-root
        .MuiFormLabel-root {
            font-size: 14px;
            left: 15px;
            top: 50%;
            transform: translateY(-50%);
            font-family: "Montserrat", sans-serif;
        }

        .MuiFormControl-root
        .MuiInputBase-root {
            height: 100%;
        }

        .MuiFormControl-root
        .MuiFormLabel-root.Mui-focused {
            display: none;
        }

        .MuiFormControl-root
        .css-113d811-MuiFormLabel-root-MuiInputLabel-root {
            position: static;
        }

        .MuiInputBase-input {
            font-family: "Montserrat", sans-serif;
            color: black;
        }

        .MuiOutlinedInput-notchedOutline
        .css-w1u3ce {
            max-width: 0;
        }

        .MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline {
            border-color: var(--violet-color);
        }

        label {
            font-size: var(--small-font-size);
            font-weight: var(--font-medium);
        }

        .local {
            width: 100%;
            height: 44px;
            border: 1px solid lightgray;
            border-radius: 10px;
            font-size: var(--small-font-size);
            padding: 10px;
            margin-top: 5px;
        }
        .local:focus {
            outline: 1px solid var(--violet-color);
        }
    }

    .container_button {
        text-align: center;
        margin-top: 50px;
        button {
            width: 100%;
            height: 48px;

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

    @media (max-width: 420px) {
        .container_date_hour {
            flex-direction: column;
            gap: 15px;
            margin-top: 40px;
        }
        .selecteds {
            flex-direction: column;
            gap: 15px;
            margin-top: 40px;
            margin-bottom: 40px;
        }
    }
`