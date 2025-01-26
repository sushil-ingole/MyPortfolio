import { PiMedalFill } from "react-icons/pi";
import "./About.scss";
import { MdPeopleAlt } from "react-icons/md";

const About = () => {
    return (
        <div className="about">
            <div className="container-div">
                <div className="inner-section">
                    <div className="left-section">
                        <img src="sushil-photo2.webp" alt="Photo" />
                    </div>
                    <div className="right-section">
                        <div className="about-cards">
                            <div className="experience">
                                <span><PiMedalFill /></span>
                                <span className="cards-text">Experience</span>
                                <span className="cards-text">3+ years</span>
                                <span className="cards-text">Frontend Development</span>
                            </div>
                            <div className="education">
                                <span><MdPeopleAlt /></span>
                                <span className="cards-text">Education</span>
                                <span className="cards-text">Information Technology</span>
                                <span className="cards-text">Bachelor Of Engineering</span>
                            </div>
                        </div>
                        <span className="about-text">
                            A passionate full-stack developer with a love for creating
                            captivating frontend experiences. Hailing from Akola, Maharashtra,
                            I completed my graduation in Information Technology in 2021. Since then,
                            I've been crafting seamless web applications, and my journey is just getting started!
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

// const About = () => {

//     return (
//         <div className="about">
//             <div className="container-div">
//                 <div className="main-section">
//                     <span className="text1 highlight">
//                         A passionate full-stack developer with a love for creating
//                         captivating frontend experiences. Hailing from Akola, Maharashtra,
//                         I completed my graduation in Information Technology in 2021. Since then,
//                         I've been crafting seamless web applications, and my journey is just getting started!
//                     </span>
//                     <br />
//                 </div>
//             </div>
//         </div >
//     );
// };

export default About;

{/* <div className="skills-section text-center">
                    <span className="text1 font-extrabold">My Skills 🛠️:</span><br />
                    <div className="skill-details">
                        <span className="text2"><strong>Languages:</strong> HTML, CSS, TypeScript, JavaScript, Angular, React. Express.js, Node.js, MongoDB, PostgreSQL</span>
                    </div>
                </div> */}