import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import image from "./Image/bbva-logo-captura.PNG";
import './Navigation.css';

const Navigation = ()=>{
    return(
        <Navbar>
            <div className = "navegador">
                <div>
                    <a>
                        <img className="logo horizontal-logo" src={image}/>
                    </a>
                </div>
                <ul className="nav-links">
                    <li><a href="#" className="nav-link">Inicio</a></li>
                    <li><a href="#" className="nav-link">My Profile</a></li>
                    <li><a href="#" className="nav-link">Algo aqui</a></li>
                </ul>
            </div>
        </Navbar>
    )
}

export default Navigation