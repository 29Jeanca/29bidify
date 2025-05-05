import BrandsList from '../components/mainPage/BrandsList';
import Hero from '../components/mainPage/Hero';
import HowWorks from '../components/mainPage/HowWorks';
import Mission from '../components/mainPage/Mission';
import Navbar from '../components/mainPage/Navbar';
import '../styles/Home.css';
const Home = () => {
    return (
        <>
        <header>
        <Navbar/>
        </header>
        <main>
            <section>
                <Hero/>
            </section>

            <section>
                <BrandsList/>
            </section>

            <section>
                <Mission/>
            </section>

            <section>
                <HowWorks/>
            </section>
        </main>
        </>
    );
}
export default Home;