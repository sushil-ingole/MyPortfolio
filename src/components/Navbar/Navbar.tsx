import { Link } from "react-scroll";
import "./Navbar.scss";

const Navbar = () => {
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
            </nav>
        </div>
    );
};

export default Navbar;