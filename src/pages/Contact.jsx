import Menu from "./Menu"
import "./Contact.css"

function Contact(){
    return(
        <div className="body-contact">
            <Menu statusMission="inactive" statusAbout="inactive" statusContact="active"/>
            <div className="container-contact">
                <h2>Reach out! Let's start something together</h2>
                <div className="form">
                    <ul>
                        <li>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name"/>
                        </li> 
                        <li>
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email"/>
                        </li>
                        <li>
                            <label htmlFor="message">Message</label>
                            <input type="text" id="message"/>
                        </li>
                        <li>
                            <input type="submit" />
                        </li>
                    </ul>
                </div>
            </div>
            
            
        </div>
    )
}

export default Contact