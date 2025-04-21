/* eslint-disable react/prop-types */
import "../mainPage/styles/Hero.css";
const Hero = ({urlImage}) => {
    return(
        <>
            <div className="hero-container">
                <img className="hero-img" src={urlImage} alt="hero" />
            </div>
        </>
    )
}
export default Hero;