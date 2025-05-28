import "./Projects.scss";

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Calculator",
            image: "calculator.png",
            github: "https://github.com/sushil-ingole/Calculator-JS",
            liveDemo: "https://jscriptcalculator.netlify.app/",
        },
        {
            id: 2,
            title: "Blackjack Game",
            image: "blackjack.png",
            github: "https://github.com/sushil-ingole/BlackJackGame",
            liveDemo: "https://blackjak.netlify.app/",
        },
        {
            id: 3,
            title: "Digital Clock",
            image: "digitalClock.png",
            github: "https://github.com/sushil-ingole/DigitalClock",
            liveDemo: "https://dgtlclock.netlify.app/",
        },
        {
            id: 4,
            title: "Tic-Tac-Toe Game",
            image: "ticTacToe.png",
            github: "https://github.com/sushil-ingole/TicTacToe",
            liveDemo: "https://tictactoegameplay.netlify.app/",
        },
        {
            id: 5,
            title: "Text Util",
            image: "textUtils.png",
            github: "https://github.com/sushil-ingole/TextUtils-React",
            liveDemo: "https://sushil-ingole.github.io/TextUtils-React/",
        },
        {
            id: 6,
            title: "Real-time Chat App [MERN]",
            image: "speakIn.png",
            github: "https://github.com/sushil-ingole/SpeakIn",
            liveDemo: "https://ichat-rxvq.onrender.com/",
        },
    ];

    return (
        <div className="projects">
            <div className="container-div">
                {projects.map((project) => (
                    <div className="project-cards" key={project.id} onClick={() => window.open(project.liveDemo, "_blank")}>
                        <img src={project.image} alt={`${project.title}-thumbnail`} />
                        <p className="project-title">{project.title}</p>
                        <div className="link-section">
                            <button className="btn btn-outline-dark">
                                <a className="link link-secondary" href={project.github} target="_blank" rel="noopener noreferrer">
                                    Github
                                </a>
                            </button>
                            <button className="btn btn-outline-dark">
                                <a className="link link-primary" href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                                    Live Demo
                                </a>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;