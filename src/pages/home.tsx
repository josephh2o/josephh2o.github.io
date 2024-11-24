import { BiLogoLinkedinSquare, BiLogoGithub, BiLogoInstagram } from "react-icons/bi";
import '../css/home.css'

function Home() {
    return (
        <div className="home-container">
            <div className="welcome-container">
                <h1>Hello! I am </h1>
                <h1>Joseph Ho</h1>
                <p className="introduction">I am passionate about product design & development.
                    Currently, I am seeking a full-time engineering position in the medical device
                    industry.
                </p>
            </div>
            <div className="links-container">
                <a href="https://www.linkedin.com/in/josephh2o" target="_blank"
                   rel="noopener noreferrer">
                    <BiLogoLinkedinSquare aria-label="Linkedin"/>
                </a>
                <a href="https://github.com/josephh2o" target="_blank"
                   rel="noopener noreferrer">
                    <BiLogoGithub aria-label="Github"/>
                </a>
                <a href="https://www.instagram.com/joseph.h2o" target="_blank"
                   rel="noopener noreferrer">
                    <BiLogoInstagram aria-label="Instagram"/>
                </a>
            </div>
        </div>
    );
}

export default Home;
