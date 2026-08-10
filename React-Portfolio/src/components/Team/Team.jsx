import "./Team.css";
import member1 from "../../assets/portfolio.jfif";

import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

function Team() {
    return (
        <section className="team">
            <h2>OUR AMAZING TEAM</h2>
            <p className="sub-title">Lorem ipsum dolor sit amet consectetur.</p>
            <div className="team-container">
                <div className="member">
                    <img src={member1} alt="" />
                    <h3>Parveen Anand</h3>
                    <h4>Lead Designer</h4>
                    <div className="social">
                        <FaTwitter />
                        <FaFacebookF />
                        <FaLinkedinIn />
                    </div>
                </div>
                <div className="member">
                    <img src={member1} alt="" />
                    <h3>Diana Petersen</h3>
                    <h4>Lead Marketer</h4>
                    <div className="social">
                        <FaTwitter />
                        <FaFacebookF />
                        <FaLinkedinIn />
                    </div>
                </div>
                <div className="member">
                    <img src={member1} alt="" />
                    <h3>Larry Parker</h3>
                    <h4>Lead Developer</h4>
                    <div className="social">
                        <FaTwitter />
                        <FaFacebookF />
                        <FaLinkedinIn />
                    </div>
                </div>
            </div>

            <p className="team-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
        </section>
    );
}

export default Team;
