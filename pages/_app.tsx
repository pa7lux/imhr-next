import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Layout } from '../components/Layout/layout';
import { ThemeProvider } from '../store/context/themeContext';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';
import Script from 'next/script';
import { Router } from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:url" content="https://imhr.top" />
        <meta property="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/images/icons/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/images/icons/favicon.svg"
          type="image/svg+xml"
        />
        <link rel="apple-touch-icon" href="/images/icons/icon.png" />
      </Head>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-2KMKDPW1DR"
      ></Script>
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments)}
      gtag('js', new Date());

      gtag('config', 'G-2KMKDPW1DR')`,
        }}
      ></Script>

      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default appWithTranslation(App);
