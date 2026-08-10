import "./Navbar.css";
function Navbar() {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">HOME</div>
                <ul className="nav-links">
                    <li>
                        <a href="#">HOME</a>
                    </li>
                    <li>
                        <a href="#services">SERVICES</a>
                    </li>
                    <li>
                        <a href="#portfolio">PORTFOLIO</a>
                    </li>
                    <li>
                        <a href="#about">ABOUT</a>
                    </li>
                    <li>
                        <a href="#team">TEAM</a>
                    </li>
                    <li>
                        <a href="#contact">CONTACT</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
