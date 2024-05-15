import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyled = createGlobalStyle`
// ========== Variables css ==========
:root {
    --header-height: 5.5rem;

    /*========== Colors ==========*/
    --violet-color: #381DDB;
    --white-color: #FFFFFF;
    --black-color: #222222;

    --logo-color-black: var(--black-color);
    --logo-color-violet: var(--violet-color);

    --text-color-white: var(--white-color);
    --text-color-black: var(--black-color);

    --icon-color-violet: var(--violet-color);
    --icon-color-white: var(--white-color);

    --button-color: var(--violet-color);

    --body-color: var(--white-color);

    /*========== Font and Typography ==========*/
    --body-font: 'Montserrat', sans-serif;

    --h0-font-size: 42px;
    --h1-font-size: 30px;
    --h2-font-size: 20px;
    --h3-font-size: 18px;
    --p-font--size: 16px;
    --small-font-size: 14px;
    --smaller-font-size: 12px;

    /*========== Line Height ==========*/

    --normal-line-height: 52px;
    --small-line-height: 30px;
    --smaller-line-height: 25px;

    /*========== Font Weight ==========*/
    --font-regular: 400;
    --font-medium: 500;
    --font-semi-bold: 600;
    --font-bold: 700;
    --font-extra-bold: 800;

}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
}

html, body {
    height: 100%;
}

body {
    position: relative;
    background-color: white;
}

ul {
    list-style: none;
}

a {
    text-decoration: none;
    color: black;
}
`

export const Container = styled.div`
    width: 100%;
    max-width: 1480px;
    margin: 0 auto;
    padding: 0 30px; 


    .container_h3 {
        padding: 50px 0px;
        text-align: center;
    }
`