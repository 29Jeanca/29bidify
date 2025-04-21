import BrandsList from '../components/mainPage/BrandsList';
import Hero from '../components/mainPage/Hero';
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
        </main>
        </>
    );
}
export default Home;