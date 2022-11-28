import '../style/base.css';
import Head from 'next/head';

function CustomApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default CustomApp;
