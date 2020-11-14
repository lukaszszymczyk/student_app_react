import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat');

    *, *::before, *::after {
    box-sizing: border-box;
    }

    html {
        font-size: 10px;
    }

    body {
        font-size: 1.6rem;
        font-family: 'Montserrat', sans-serif;
        background: #f5f6fb;
        height: 100vh;
    }
`;

export default GlobalStyle;
