import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
    *,*::before,*::after,h1,h2,h3,h4,h5,h5 {
        margin: 0;
        padding: 0;
    }
    h1,h2,h3,h4,h5,h5{
        display: inline-block;
        font-weight: 500;
    }

html,body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: #7510f7;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
    `;

export const LightTheme = {
  primaryColor: "#7510f7",
  secondaryColor: "#f7f7f7",
  tineryColor: "#141c3a",
  fourthColor: "#d3bafd",
  shadowColorPrimary: "#dfdfdf",
  shadowColorSecondary: "#5e0dc7",

  breakpoints: {
    desktop: "1024px",
  },
};
