import React,{Component} from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import image from "./Image/bbva-logo-captura.PNG";
import './Banco.css';

export class Banco extends Component{

    render(){
        return(
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
                <div className="inferior">
                    <label for="servicios">Selecciona un servicio:</label>
                    <select id="servicios">
                        <option value="vacio">-</option>
                        <option value="depósitos">Depositos</option>
                        <option value="transferencia">Transferencias</option>
                        <option value="prestamos">Préstamos</option>
                        <option value="pagos">Pagos</option>
                    </select>
                </div>
            </div>
        )
    }
}