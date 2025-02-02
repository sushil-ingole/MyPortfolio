import "./Footer.scss";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container-div">
                <div className="footer-links">
                    <a href="https://www.instagram.com/basicalyhuman/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="footer-icon" />

                    </a>
                    <a href="https://www.linkedin.com/in/sushil-ingole-557aa7141" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="footer-icon" />

                    </a>
                    <a href="mailto:sushilingole2024@gmail.com">
                        <FaEnvelope className="footer-icon" />

                    </a>
                </div>
                <div className="footer-text">
                    <span className="copyright">Copyright © {new Date().getFullYear()} Sushil Ingole. All Rights Reserved.</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;