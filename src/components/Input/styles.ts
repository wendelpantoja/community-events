import styled from "styled-components"

export const ContainerInput = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: center;
    margin: 0 auto;
    margin-top: 20px;

    label {
        font-weight: var(--font-medium);
        margin-bottom: 5px;
    }

    .input {
        display: flex;
        align-items: center;
        width: 100%;
        height: 54px;
        border: 2px solid lightgray;
        border-radius: 8px;
        padding-left: 10px;
        padding-right: 10px;

        i {
            color: lightgray;
        }

        .bxs-show, .bxs-hide {
            cursor: pointer;
            font-size: 19px;
        }

        input {
            width: 100%;
            height: 100%;
            border: none;
            padding-left: 8px;
            border-radius: 8px;
            outline: none;
        }

        input[type=text] {
            font-size: var(--small-font-size);
            color: var(--black-color-light);
        }
        input[type=password] {
            font-size: var(--small-font-size);
            color: var(--black-color-light);
        }
    }

    .input:focus-within {
        border-color: var(--violet-color);

        i {
            color: var(--icon-color-violet);
        }
    }

`