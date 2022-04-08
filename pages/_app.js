import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`


html{
  box-sizing: border-box;
  display:block;
  padding: 0;
  margin: 0;
  overflow-x:hidden
}

body{
  padding: 0;
  margin: 0;
  font-family: "Cutive Mono", monospace;
}

.swiper-container{

}



.swiper-button-prev,
.swiper-button-next{
color: #656262 !important;
background-color: #cbbfff;
padding:20px
}



.word-wrapper {
  white-space: nowrap;
}

.container {
  max-width: 960px;
  padding: 40px;
  margin: 0 auto;
}


`;

const theme = {
  colors: {
    primary: "#fafafa",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
