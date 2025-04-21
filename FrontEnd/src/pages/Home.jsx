import Hero from '../components/mainPage/Hero';
import Navbar from '../components/mainPage/Navbar';
import '../styles/Home.css';
const Home = () => {
    const IMGS  = [
        "../src/assets/imgs/hero_image.jpg"
    ]

    return (
        <>
        <header>
        <Navbar/>
        </header>
        <main>
            <section>
                <Hero urlImage={IMGS[0]}/>
            </section>
        </main>
        </>
    );
}
export default Home;