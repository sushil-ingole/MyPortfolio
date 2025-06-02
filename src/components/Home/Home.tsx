import "./Home.scss";

const Home = () => {
    return (
        <div className="home">
            <div className="container-div">
                <div className="left-section">
                    <span className="title1">HI, I'M SUSHIL</span><br />
                    <span className="title2">A WEB DEVELOPER</span><br />
                    <span className="title3">Focused on creating seamless, user-friendly, and visually appealing web experiences that captivate users and meet business goals.</span>
                    <a href="/Sushil_Ingole_Resume_2024__MEAN.pdf" download="Sushil_CV.pdf">
                        <button type="button" className="btn btn-outline-dark dwnld-cv-btn">Download CV</button>
                    </a>
                    <a href="tel:+917057879165">
                        <button type="button" className="btn btn-outline-dark contact-btn">Contact Info</button>
                    </a>
                </div>
                <div className="right-section">
                    <div className="image-wrapper">
                        <img src="sushil-photo.jpg" alt="Photo" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
