import styles from '../../styles/layout/layout.module.scss';

import Navbar from '../shared/navbar/Navbar';
import Footer from '../shared/footer/Footer';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Sundelöf</title>
        <meta
          name='description'
          content='Sundelof is a platform for everyone to enjoy. A palce to share your adventures!'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=KoHo:wght@200;300;400;500;600;700&family=Roboto:wght@100;300;400;500;700;900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <div className={styles.page_wrapper}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
