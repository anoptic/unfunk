import '../styles/reset.css';
import '../styles/globals.css';
import '../styles/fonts.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layout';
// import * as Toast from '@radix-ui/react-toast';
import { Provider as ToastProvider } from '@radix-ui/react-toast';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ToastProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ToastProvider>
  );
}

export default MyApp;
