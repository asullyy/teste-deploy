import Menu from "./Menu"
import "./Contact.css"

function Contact(){
    return(
        <div className="body-contact">
             <Menu statusMission="inactive" statusAbout="inactive" statusContact="active"/>
            <h1>Contact</h1>
        </div>
    )
}

export default Contact