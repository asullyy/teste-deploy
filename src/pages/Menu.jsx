import "./Menu.css"

import {Link} from 'react-router-dom'

function Menu(){
    return(
        <div>
            <ul>
                <li>
                    <Link to="/teste-deploy">Home</Link>
                </li>
                <li>
                    <Link to="/teste-deploy/About">About</Link>
                </li>
                <li>
                    <Link to="/teste-deploy/Contact">Contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default Menu