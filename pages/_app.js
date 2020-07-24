import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.scss';

import AppNavbar from '@/components/shared/Navbar';
import Hero from '@/components/shared/Hero';
import Footer from '@/components/shared/Footer';

const MyApp = ({ Component, pageProps }) => {

    const isHomePage = () => Component.name === 'Home';

    return (
        <div className="portfolio-app">
            <AppNavbar />

            {isHomePage() && <Hero />}

            <div className="container">
                <Component {...pageProps} />
            </div>

            {isHomePage() && <Footer />}
        </div>
    )
}


// MyApp.getInitialProps = async (context) => {
//     console.log('GET INITIAL PROPS _APP');
//     const initialProps = App.getInitialProps && await App.getInitialProps(context);
//     return { pageProps: { appData: 'Hello _App Component', ...initialProps.pageProps } }
// }

export default MyApp