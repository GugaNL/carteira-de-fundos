import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box; //Ao inserir uma borda, ela é colocada pra dentro, sem alterar as dimensões do objeto
}

html, body, #root {
height: 100%;
}

*, button, input {
    border: 0;
    outline: 0;
    font-family: 'Roboto', sans-serif;
}

button {
    cursor: pointer;
}


`

export default GlobalStyle
