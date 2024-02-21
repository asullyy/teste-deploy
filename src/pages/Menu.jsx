import "./Menu.css"
import {Link} from 'react-router-dom'

function Menu(props){
    return(
        <div className="body-menu">
            <h4>Benthos</h4>
            <ul>
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
        </div>
    )
}

export default Menu