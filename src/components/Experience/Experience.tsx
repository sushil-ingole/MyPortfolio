import "./Experience.scss";

const Experience = () => {
    return (
        <div className="experience">
            <div className="container-div">
                <div className="experience-cards">
                    <div className="frontend">
                        <span className="exp-title">Frontend Development</span>
                        <div className="inner-container">
                            <div className="skill-card">
                                <img src="checkmark.svg" alt="checkmark-icon" />
                                <span className="cards-text">HTML</span>
                            </div>
                            <div className="skill-card">
                                <img src="checkmark.svg" alt="checkmark-icon" />
                                <span className="cards-text">CSS / SCSS</span>
                            </div>
                            <div className="skill-card">
                                <img src="checkmark.svg" alt="checkmark-icon" />
                                <span className="cards-text">JavaScript</span>
                            </div>
                            <div className="skill-card">
                                <img src="checkmark.svg" alt="checkmark-icon" />
                                <span className="cards-text">TypeScript</span>
                            </div>
                            <div className="skill-card">
                                <img src="checkmark.svg" alt="checkmark-icon" />
                                <span className="cards-text">Angular</span>
                            </div>
                            <div className="skill-card">
                                <img src="checkmark.svg" alt="checkmark-icon" />
                                <span className="cards-text">React</span>
                            </div>
                        </div>
                    </div>
                    <div className="backend">
                        <span className="exp-title">Backend Development</span>
                        <div className="inner-container">
                            <div className="skill-card">
                                <img src="checkmark.svg" alt="checkmark-icon" />
                                <span className="cards-text">NodeJS</span>
                            </div>
                            <div className="skill-card">
                                <img src="checkmark.svg" alt="checkmark-icon" />
                                <span className="cards-text">ExpressJS</span>
                            </div>
                            <div className="skill-card">
                                <img src="checkmark.svg" alt="checkmark-icon" />
                                <span className="cards-text">MongoDB</span>
                            </div>
                            <div className="skill-card">
                                <img src="checkmark.svg" alt="checkmark-icon" />
                                <span className="cards-text">PostgreSQL</span>
                            </div>
                            <div className="skill-card">
                                <img src="checkmark.svg" alt="checkmark-icon" />
                                <span className="cards-text">Git</span>
                            </div>
                            <div className="skill-card">
                                <img src="checkmark.svg" alt="checkmark-icon" />
                                <span className="cards-text">CPP</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;
