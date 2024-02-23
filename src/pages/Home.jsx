import Menu from "./Menu";
import "../pages/Home.css";

import {FaInstagram, FaLinkedin} from "react-icons/fa"

import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import img1 from "../assets/slider/turtle.jpg";
import img2 from "../assets/slider/community.png";
import img3 from "../assets/slider/drone.jpg";


import sp01 from "../assets/suports/bia.png"
import sp02 from "../assets/suports/eyc.png"
import sp03 from "../assets/suports/Senate.png"
import sp04 from "../assets/suports/soa.png"

const data = [
    {id: "1", 
     img: img1, 
     title:'Ocean Health', 
     txt:'Our oceans are at risk, affecting both nature and communities. Benthos focuses on using data to empower local action for ocean health, aligning with global sustainability goals'},
    {id: "2", 
     img: img2, 
     title:'Data Integrity', 
    txt:'Benthos prioritizes working hand-in-hand with Indigenous and local communities, ensuring data practices are fair, respectful, and community-led, aligning with CARE principles for ethical collaboration'},
    {id: "3", 
     img: img3, 
     title:'AI for the Oceans', 
     txt:"Data's full potential in conservation is untapped due to gaps. Benthos addresses this by leveraging affordable tech to fill these gaps, ensuring data-driven approaches bolster ocean health efforts"}
]

function Home(){
    return(
        <div className="body-home">
            <Menu statusMission="active" statusAbout="inactive" statusContact="inactive"/>
            <div className="container-home">
                <h1>Empowering local communities with digital tools for marine conservation</h1>

                <a href="/teste-deploy/Contact">
                    <button>GET IN TOUTCH</button>
                </a>
                

                <div className="container-slider">
                    <h2>The Mission</h2>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        navigation
                        pagination={{ clickable: true }}
                    >
                        {data.map((item) => (
                            <SwiperSlide>
                                <div className="slide">
                                    <img src={item.img} alt="" />
                                    <div>
                                        <h2>{item.title}</h2>
                                        <h3>{item.txt}</h3>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="container-supports">
                        <h2>Supported By</h2>
                        <ul>
                            <li><img src={sp01} alt="" /></li>
                            <li><img src={sp02} alt="" /></li>
                            <li><img src={sp03} alt="" /></li>
                            <li><img src={sp04} alt="" /></li>
                        </ul>
                </div>
                <div className="container-rodape">
                    <h4>benthos</h4>
                    <ul>
                        <li><FaInstagram/></li>
                        <li><FaLinkedin/></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home