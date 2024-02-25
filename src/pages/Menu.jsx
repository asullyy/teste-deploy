import "./Menu.css"
import {Link} from 'react-router-dom'
import {FaBars} from "react-icons/fa"
import { useState } from "react"

function eventoTeste(){
    console.log("Opa, ativado")
}

function Menu(props){

    const [menuOpen, setMenuOpen] = useState (false);

    return(
        <div>
            <nav>
                <div className="icone-menu" onClick={() => {
                    setMenuOpen(!menuOpen)
                }}>
                    <FaBars/>
                </div>
                <ul className={menuOpen ? "open" : ""}>
                    <li className={props.statusMission}>
                        <Link to="/teste-deploy">MISSION</Link>
                    </li>
                    <li className={props.statusAbout}>
                        <Link to="/teste-deploy/About">ABOUT</Link>
                    </li>
                    <li className={props.statusContact}>
                        <Link to="/teste-deploy/Contact">CONTACT</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu