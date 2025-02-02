import { useState, useEffect } from "react";
import "./Navbar.scss";

const Navbar = () => {
    const [activeLink, setActiveLink] = useState("#home");

    const handleSetActiveLink = (link: string) => {
        setActiveLink(link);
    };

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.2,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && entry.target.id !== "footer") {
                    setActiveLink(`#${entry.target.id}`);
                }
            });
        }, options);

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);

    return (
        <div className="navbar">
            <nav>
                <ul>
                    <li>
                        <a
                            href="#home"
                            className={activeLink === "#home" ? "active" : ""}
                            onClick={() => handleSetActiveLink("#home")}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            className={activeLink === "#about" ? "active" : ""}
                            onClick={() => handleSetActiveLink("#about")}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#experience"
                            className={activeLink === "#experience" ? "active" : ""}
                            onClick={() => handleSetActiveLink("#experience")}
                        >
                            Experience
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            className={activeLink === "#projects" ? "active" : ""}
                            onClick={() => handleSetActiveLink("#projects")}
                        >
                            Projects
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;