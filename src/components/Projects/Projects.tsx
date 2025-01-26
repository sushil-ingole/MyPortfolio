import "./Projects.scss";

const Projects = () => {

    return (
        <div className="projects">
            <div className="container-div">
                <div className="project-cards">
                    <img src="calculator.png" alt="project-thumbnail" />
                    <p className="project-title">Calculator</p>
                    <div className="link-section">
                        <button className="btn btn-outline-dark"><a className="link link-secondary" href="https://github.com/sushil-ingole/Calculator-JS">Github</a></button>
                        <button className="btn btn-outline-dark"><a className="link link-primary" href="https://jscriptcalculator.netlify.app/">Live Demo</a></button>
                    </div>
                </div>
                <div className="project-cards">
                    <img src="blackjack.png" alt="project-thumbnail" />
                    <p className="project-title">Blackjack Game</p>
                    <div className="link-section">
                        <button className="btn btn-outline-dark"><a className="link link-secondary" href="https://github.com/sushil-ingole/BlackJackGame">Github</a></button>
                        <button className="btn btn-outline-dark"><a className="link link-primary" href="https://blackjak.netlify.app/">Live Demo</a></button>
                    </div>
                </div>
                <div className="project-cards">
                    <img src="digitalClock.png" alt="project-thumbnail" />
                    <p className="project-title">Digital Clock</p>
                    <div className="link-section">
                        <button className="btn btn-outline-dark"><a className="link link-secondary" href="https://github.com/sushil-ingole/DigitalClock">Github</a></button>
                        <button className="btn btn-outline-dark"><a className="link link-primary" href="https://dgtlclock.netlify.app/">Live Demo</a></button>
                    </div>
                </div>
                <div className="project-cards">
                    <img src="ticTacToe.png" alt="project-thumbnail" />
                    <p className="project-title">Tic-Tac-Toe Game</p>
                    <div className="link-section">
                        <button className="btn btn-outline-dark"><a className="link link-secondary" href="https://github.com/sushil-ingole/TicTacToe">Github</a></button>
                        <button className="btn btn-outline-dark"><a className="link link-primary" href="https://tictactoegameplay.netlify.app/">Live Demo</a></button>
                    </div>
                </div>
                <div className="project-cards">
                    <img src="textUtils.png" alt="project-thumbnail" />
                    <p className="project-title">Text Util</p>
                    <div className="link-section">
                        <button className="btn btn-outline-dark"><a className="link link-secondary" href="https://github.com/sushil-ingole/TextUtils-React">Github</a></button>
                        <button className="btn btn-outline-dark"><a className="link link-primary" href="https://sushil-ingole.github.io/TextUtils-React/">Live Demo</a></button>
                    </div>
                </div>
                <div className="project-cards">
                    <img src="speakIn.png" alt="project-thumbnail" />
                    <p className="project-title">Real-time Chat App [MERN]</p>
                    <div className="link-section">
                        <button className="btn btn-outline-dark"><a className="link link-secondary" href="https://github.com/sushil-ingole/SpeakIn">Github</a></button>
                        <button className="btn btn-outline-dark"><a className="link link-primary" href="https://ichat-rxvq.onrender.com/">Live Demo</a></button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Projects;
