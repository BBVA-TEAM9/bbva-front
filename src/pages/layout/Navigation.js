import React from 'react';
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import image from "./Image/logo_bbva_blanco.svg";
import cardImage from "./Image/card.svg";
import coinsImage from "./Image/savings.svg";

import './Navigation.css';


const menu = [
    'PERSONAS',
    'EMPRESAS'
];

const Navigation = () => {
    return (
        <nav className="navbar navbar-bbva navbar-expand-lg pt-0 pb-0 ">
            <div className="container container-bbva pt-0 pb-0">
                <a className="navbar-brand" href="#">
                    <img src={image} className="logo" alt=""/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">PERSONAS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">EMPRESAS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <img className="icon-menu" src={cardImage} alt=""/>
                                Obtén tu Tarjeta de Crédito</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link coins" href="#">
                                <img className="icon-menu" src={coinsImage} alt=""/>
                                Abre tu cuenta</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link banca" href="#">Banca por Internet</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigation