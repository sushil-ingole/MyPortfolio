import "./Navbar.scss";

const Navbar = () => {
    return (
        <div className="navbar">
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    {/* <li><a href="contact">Contact</a></li> */}
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;