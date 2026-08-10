import "./Portfolio.css";

import img1 from "../../assets/portfolio.jfif";

function Portfolio() {
    return (
        <section className="portfolio">
            <h2>PORTFOLIO</h2>
            <p className="sub-title">Lorem ipsum dolor sit amet consectetur.</p>
            <div className="portfolio-container">
                <div className="card">
                    <img src={img1} alt="" />
                    <h3>Threads</h3>
                    <span>Illustration</span>
                </div>

                <div className="card">
                    <img src={img1} alt="" />
                    <h3>Explore</h3>
                    <span>Graphic Design</span>
                </div>

                <div className="card">
                    <img src={img1} alt="" />
                    <h3>Finish</h3>
                    <span>Identity</span>
                </div>

                <div className="card">
                    <img src={img1} alt="" />
                    <h3>Lines</h3>
                    <span>Branding</span>
                </div>

                <div className="card">
                    <img src={img1} alt="" />
                    <h3>Southwest</h3>
                    <span>Website Design</span>
                </div>

                <div className="card">
                    <img src={img1} alt="" />
                    <h3>Window</h3>
                    <span>Photography</span>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
