import "./Hero.css";
import "../../assets/Hero.avif";

function Hero() {
    return (
        <section className="hero">
            <div className="overlay">
                <div className="hero-content">
                    <p className="hero-subtitle">Welcome To Our Studio</p>

                    <h1 className="hero-title">IT'S NICE TO MEET YOU</h1>

                    <button className="hero-btn">TELL ME MORE</button>
                </div>
            </div>
        </section>
    );
}

export default Hero;
