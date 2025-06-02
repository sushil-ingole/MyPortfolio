import { Link } from "react-scroll";
import "./Navbar.scss";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = ({ toggleDarkMode, isDarkMode }: { toggleDarkMode: () => void; isDarkMode: boolean }) => {
    return (
        <div className="navbar">
            <nav>
                <ul>
                    <li>
                        <Link to="home" smooth={true} duration={100} activeClass="active" spy={true} offset={-50}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="about" smooth={true} duration={100} activeClass="active" spy={true}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="experience" smooth={true} duration={100} activeClass="active" spy={true}>
                            Experience
                        </Link>
                    </li>
                    <li>
                        <Link to="projects" smooth={true} duration={100} activeClass="active" spy={true}>
                            Projects
                        </Link>
                    </li>
                </ul>
                <div className="checkbox-container">
                    <input type="checkbox" className="checkbox" id="checkbox" onChange={toggleDarkMode} />
                    <label htmlFor="checkbox" className="checkbox-label">
                        <FaMoon className="fas fa-moon" />
                        <FaSun className="fas fa-sun" />
                        <span className="ball"></span>
                    </label>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;