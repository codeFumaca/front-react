import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
}

html {
    width: auto;
}

body {
    max-width: 100vw;
    height: 100vh;
    background-color: #e6e6e6;
}
`;