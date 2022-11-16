import { createContext } from 'react'
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Layout } from '../components/Layout/Layout';
import { ThemeProvider } from '../store/context/context';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
    
  );
}
