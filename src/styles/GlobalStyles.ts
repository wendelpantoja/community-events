import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyled = createGlobalStyle`

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