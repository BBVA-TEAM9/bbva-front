import React,{Component} from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import image from "../layout/Image/bbva-logo-captura.PNG";
import './oficina.css';
import Aforo from './aforo';



const Oficina = (props)=>{

    console.log('oficina',props.oficina);
    //const oficina = props.oficina??{id:1}}
    return (
        
        <div className="banco">
            <div className="superior">
                <h3 className="nombrebanco">
                    Banco ....
                </h3>
                <Aforo oficinaId={1} />
                <h3 className="aforo">
                    Numero
                </h3>
            </div>
            <div className="infobanco">
                <p> dirección</p>
                <p> horario</p>
            </div>
            <div className="inferior">
               {/*  <label for="servicios">Selecciona un servicio:</label>
                <select id="servicios">
                    <option value="vacio">-</option>
                    <option value="depósitos">Depositos</option>
                    <option value="transferencia">Transferencias</option>
                    <option value="prestamos">Préstamos</option>
                    <option value="pagos">Pagos</option>
                </select> */}
            </div>
        </div>
       

    )
}

export default Oficina