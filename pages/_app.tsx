import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components/Layout/layout";
import { ThemeProvider } from "../store/context/themeContext";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";
import { Router } from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="I am here. Сайт, де підлітки з України розповідають свої історії."
        />
        <meta
          property="og:title"
          content="imhr.top — історії українських підлітків"
        />
        <meta property="og:url" content="https://imhr.top" />
        <meta
          property="og:image"
          content="https://imhr.top/images/icons/og-index-uk.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/images/icons/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/images/icons/favicon.svg"
          type="image/svg+xml"
        />
        <link rel="apple-touch-icon" href="/images/icons/icon.png" />
      </Head>

      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default appWithTranslation(App);
