import Head from "next/head";
import "../styles/css/style.css";
// import "../styles/fonts/stylesheet.css";
// import "../styles/globals.css";
import { SnackbarProvider, useSnacar } from "notistack";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <SnackbarProvider
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      maxSnack={1}
      autoHideDuration={3000}
    >
      <Head>
        <title>Card Up</title>
        <meta name="description" />
        <link rel="icon" href="/images/favicon.png" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />
      </Head>

      <Component {...pageProps} />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" />
      <Script src="https://code.jquery.com/jquery-3.6.0.min.js" />
      <Script
        src="https://kit.fontawesome.com/e30259c958.js"
        crossOrigin="anonymous"
      />
    </SnackbarProvider>
  );
}

export default MyApp;
