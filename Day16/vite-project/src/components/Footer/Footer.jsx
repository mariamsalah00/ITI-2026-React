import "./Footer.css";

import { FaMicrosoft, FaGoogle, FaFacebook, FaTwitter, FaLinkedinIn } from "react-icons/fa";

function Footer() {
    return (
        <>
            <section className="companies">
                <div className="company-container">
                    <FaMicrosoft />
                    <FaGoogle />
                    <FaFacebook />
                    <h2 className="ibm">IBM</h2>
                </div>
            </section>
            <footer>
                <p>Copyright © Your Website 2022</p>
                <div className="footer-icons">
                    <FaTwitter />
                    <FaFacebook />
                    <FaLinkedinIn />
                </div>
                <div className="footer-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Use</a>
                </div>
            </footer>
        </>
    );
}
export default Footer;
