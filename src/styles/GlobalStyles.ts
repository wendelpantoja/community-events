import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyled = createGlobalStyle`
// ========== Variables css ==========
:root {
    --header-height: 5.5rem;

    /*========== Colors ==========*/
    --violet-color: #381DDB;
    --violet-color-light: #DBE2FF;
    --white-color: #FFFFFF;
    --black-color: #222222;

    --logo-color-black: var(--black-color);
    --logo-color-violet: var(--violet-color);

    --text-color-white: var(--white-color);
    --text-color-black: var(--black-color);
    --text-color-violet: var(--violet-color);

    --icon-color-violet: var(--violet-color);
    --icon-color-white: var(--white-color);

    --button-color: var(--violet-color);
    --button-hover: #462CFF;
    --button-hover-light: #6E72FF;

    --bg-gradient-differ: linear-gradient(180deg, rgba(56, 29, 219, 0.05) 0%, rgba(196, 196, 196, 0.05) 50%, rgba(56, 29, 219, 0.05) 100%);

    --body-color: var(--white-color);

    /*========== Font and Typography ==========*/
    --body-font: 'Montserrat', sans-serif;

    --h1-font-size: 42px;
    --h2-font-size: 30px;
    --h3-font-size: 20px;
    --h4-font-size: 18px;
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
    font-family: var(--body-font);
}

html, body {
    height: 100%;
}

body {
    position: relative;
    background-color: var(--body-color);
}

ul {
    list-style: none;
}

a {
    text-decoration: none;
    color: black;
}

h1 {
    font-size: var(--h1-font-size);
}
h2 {
    font-size: var(--h2-font-size);
}
h3 {
    font-size: var(--h3-font-size);
}
h4 {
    font-size: var(--h4-font-size);
}
p {
    font-size: var(--p-font--size);
}

span {
    color: var(--text-color-violet);
}
`

export const Container = styled.div`
    max-width: 1230px;
    margin: 0 auto;
    padding: 0 30px; 
    
`