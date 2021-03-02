import { createGlobalStyle } from "styled-components";

// Dark Blue (Dark Mode Elements): hsl(209, 23%, 22%)
// Very Dark Blue (Dark Mode Background): hsl(207, 26%, 17%)
// White (Dark Mode Text & Light Mode Elements): hsl(0, 0%, 100%)

// Very Dark Blue (Light Mode Text): hsl(200, 15%, 8%)
// Dark Gray (Light Mode Input): hsl(0, 0%, 52%)
// Very Light Gray (Light Mode Background): hsl(0, 0%, 98%)

// Mobile: 375px
// Desktop: 1440px

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    background: ${(props) => props.theme.colors.background};
    font-size: 14px;
    font-family: 'Nunito Sans', sans-serif;
    color: ${(props) => props.theme.colors.text};
}
`;
