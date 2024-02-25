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
                            <label htmlFor="name" class="label-text">NAME</label>
                            <input type="text" placeholder="Enter your name" id="name"/>
                        </li> 
                        <li>
                            <label htmlFor="email" class="label-text">EMAIL ADDRESS</label>
                            <input type="text" placeholder="Enter your email adress" id="email"/>
                        </li>
                        <li>
                            <label htmlFor="message" class="label-text">MESSAGE</label>
                            <input className="input-msg" type="text" placeholder="Example text" id="message"/>
                        </li>
                    </ul>
                <div>
                    <button>SUBMIT</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Contact