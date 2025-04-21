import "../mainPage/styles/Hero.css";
const Hero = () => {
    const IMGS  = [
        "../src/assets/imgs/hero_image.jpg"
    ]
    return(
        <>
            <div className="hero-container">
                <img className="hero-img" src={IMGS[0]} alt="hero" />
            </div>
        </>
    )
}
export default Hero;