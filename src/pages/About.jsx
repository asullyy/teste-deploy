import Menu from "./Menu"
import "./About.css"

import imgPerfil from "../assets/fran.png"

function About(){
    return(
        <div className="body-about">
            <Menu statusMission="inactive" statusAbout="active" statusContact="inactive"/>
            <div className="container-about">
                <h2>A little about me</h2>
                <img src={imgPerfil} alt="" />
                <p>Hi, I'm Francielly! Growing up on the shores of Guanabara Bay in Rio de Janeiro, an area of stunning natural beauty yet facing significant socio-environmental challenges, I learned early on about the complexities of conservation efforts. The reality of my youth, marked by both wonder and adversity, taught me that meaningful change requires more than a single solution; it demands a holistic approach involving technology, education, community engagement, and sustainable policies.</p>
                <p>This understanding didn't just influence me; it shaped my personal and professional mission, which, in essence, are one and the same. Throughout my academic journey in Oceanography and later in Geosciences, I realized that technology, when made accessible, could be a vital tool in this multifaceted approach. It's particularly crucial for empowering both indigenous peoples and local communities at the forefront of marine conservation, who are often the most affected yet the most overlooked in the dialogue around environmental solutions.</p>
                <p>This understanding didn't just influence me; it shaped my personal and professional mission, which, in essence, are one and the same. Throughout my academic journey in Oceanography and later in Geosciences, I realized that technology, when made accessible, could be a vital tool in this multifaceted approach. It's particularly crucial for empowering both indigenous peoples and local communities at the forefront of marine conservation, who are often the most affected yet the most overlooked in the dialogue around environmental solutions.</p>
                <p>You can find me on LinkedIn <a href="https://www.linkedin.com/in/francielly-monteiro/" target="_blank">here</a> </p>
            </div>
        </div>
    )
}

export default About