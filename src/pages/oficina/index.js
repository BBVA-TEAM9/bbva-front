import React,{Component} from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import image from "../layout/Image/bbva-logo-captura.PNG";
import './oficina.css';


const Oficina = (props)=>{

    console.log('oficina',props.oficina);
    return (
        
        <div className="banco">
            <div className="superior">
                <h3 className="nombrebanco">
                    Banco ....
                </h3>
                <h3 className="aforo">
                    Numero
                </h3>
            </div>
            <div className="infobanco">
                <p> dirección</p>
                <p> horario</p>
            </div>
            <p className="servicios">
                Servicios
            </p>
            <div className="servicio1">
                <ul>
                    <div className="info">
                        <li>
                            Depósitos
                        </li>
                        <div className="popover__wrapper">
                            <a href="#">
                                <img img className="infomenu" src={infoImage} alt=""/>
                            </a>
                            <div className="popover__content">
                                <p className="popover__message">Servicio digital, hazlo en 5 minutos</p>
                            </div>
                        </div>
                    </div>
                    <div className="info">
                        <li>
                            Transferencia
                        </li>
                        <div className="popover__wrapper">
                            <a href="#">
                                <img img className="infomenu" src={infoImage} alt=""/>
                            </a>
                            <div className="popover__content">
                                <p className="popover__message">Servicio digital, hazlo en 5 minutos</p>
                            </div>
                        </div>
                    </div>
                    <div className="info">
                        <li>
                            Prestamos
                        </li>
                        <div className="popover__wrapper">
                            <a href="#">
                                <img img className="infomenu" src={infoImage} alt=""/>
                            </a>
                            <div className="popover__content">
                                <p className="popover__message">Servicio presencial</p>
                            </div>
                        </div>
                    </div>
                    <div className="info">
                        <li>
                            Pagos
                        </li>
                        <div className="popover__wrapper">
                            <a href="#">
                                <img img className="infomenu" src={infoImage} alt=""/>
                            </a>
                            <div className="popover__content">
                                <p className="popover__message">Servicio presencial</p>
                            </div>
                        </div>
                    </div>
                </ul>
            </div>
        </div>
       

    )
}

export default Oficina
