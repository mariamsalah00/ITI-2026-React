import "./Services.css";
import { FaShoppingCart, FaLaptop, FaLock } from "react-icons/fa";

function Services() {
    return (
        <section className="services">
            <h2>SERVICES</h2>
            <p className="sub-title">Lorem ipsum dolor sit amet consectetur.</p>

            <div className="service-container">
                <div className="service">
                    <div className="icon">
                        <FaShoppingCart />
                    </div>

                    <h3>E-Commerce</h3>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore.</p>
                </div>

                <div className="service">
                    <div className="icon">
                        <FaLaptop />
                    </div>

                    <h3>Responsive Design</h3>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore.</p>
                </div>

                <div className="service">
                    <div className="icon">
                        <FaLock />
                    </div>

                    <h3>Web Security</h3>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore.</p>
                </div>
            </div>
        </section>
    );
}

export default Services;
