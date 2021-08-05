import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Theme } from "../components";
import { Layout } from "../containers";
import "react-datepicker/dist/react-datepicker.css";
const GlobalStyle = createGlobalStyle`
html{

}
body{
  margin: 0px;
}
`;
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
