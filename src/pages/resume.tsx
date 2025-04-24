import {
    BiLogoPython,
    BiLogoJava,
    BiLogoJavascript,
    BiLogoHtml5,
    BiLogoCss3,
    BiLogoReact,
    BiLogoGit
} from "react-icons/bi";
import uwLogo from '../assets/uw_logo.svg'
import abbottLogo from '../assets/abbott_logo.svg'
import Card from '../components/card'
import '../css/resume.css'
import '../css/card.css'

function Resume() {
    return (
        <div className="resume-container">
            <h2>Education</h2>
            <Card image={uwLogo}
                  link="https://wisc.edu"
                  title="University of Wisconsin-Madison"
                  content={[
                      "B.S. Biomedical Engineering",
                      "Cert. Computer Sciences"
                  ]}
            />
            <h2>Experience</h2>
            <Card image={abbottLogo}
                  link="https://www.abbott.com/"
                  title="Abbott - Technical Services Engineer"
                  content={[
                      "Providing technical support for cardiac rhythm management devices, including pacemakers and defibrillators, to healthcare professionals and patients.",
                  ]}
            />
            <Card image={uwLogo}
                  link="https://www.pediatrics.wisc.edu/research/research-groups/pattnaik/"
                  title="Pattnaik Lab - Research Assistant"
                  content={[
                      "Investigated the effect of anti-epileptic drugs on retinal tissue using electrophysiological techniques, including multielectrode arrays and electroretinograms, to analyze functional changes.",
                  ]}
            />
            <h2>Academic Projects</h2>
            <Card link="https://bmedesign.engr.wisc.edu/projects/s24/implantable_ICP_monitor"
                  title="Implantable Pressure Sensor for Craniosynostosis"
                  content={[
                      "Designed a long-term implant for craniosynostosis patients to enable non-invasive intracranial pressure monitoring through imaging, supporting timely treatment and minimizing invasive procedures.",
                  ]}
            />
            <Card link="https://bmedesign.engr.wisc.edu/projects/f22/cardiac_pressure_monitor"
                  title="Left Ventricular Pressure Monitoring Device"
                  content={[
                      "Developed a improved balloon catheter for pre-clinical cardiovascular research, aimed at enhancing fabrication ease, minimizing experimental error, and improving consistency.",
                  ]}
            />
            <Card link="https://bmedesign.engr.wisc.edu/projects/f21/anaphylaxis_test"
                  title="Rapid Bedside Test for Anaphylaxis"
                  content={[
                      "Conceptualized a rapid saliva test for tryptase levels during allergic reactions, enabling immediate diagnosis and assessment of food desensitization.",
                  ]}
            />
            <h2>Skills</h2>
            <div className="skills-container">
                <BiLogoPython aria-label="Python"/>
                <BiLogoJava aria-label="Java"/>
                <BiLogoJavascript aria-label="JavaScript"/>
                <BiLogoHtml5 aria-label="HTML5"/>
                <BiLogoCss3 aria-label="CSS3"/>
                <BiLogoReact aria-label="React"/>
                <BiLogoGit aria-label="Git"/>
            </div>
        </div>
    );
}

export default Resume;
