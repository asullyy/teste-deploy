import Menu from "./Menu"
import "./About.css"

function About(){
    return(
        <div className="body-about">
            <Menu statusMission="inactive" statusAbout="active" statusContact="inactive"/>
            <h1>About</h1>
        </div>
    )
}

export default About