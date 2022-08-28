import React,{useEffect, useState} from 'react';
import Footer from './Footer'
import Navigation from './Navigation'
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import MapComponent from '../map'
import Oficina from '../oficina'
import './Main.css'

const Main = ()=>{

    const [markers,setMarkers] = useState([])
    const [oficina,setOficina] = useState(null)
    const fetchOficinas = async ()=>{
        const oficinas = await axios.get(process.env.REACT_APP_URL_API+'Oficinas');
        const response = oficinas.data;
        console.log(response);
        const markerss = response.map((e)=>{        
            return {
              id:e.id,
              lat:parseFloat(e.latitud),
              lng:parseFloat(e.longitud)
            }
          })
        setMarkers(markerss)
        console.log(markerss)
      }
    
      useEffect(() => {
        fetchOficinas()
      },[]);


    return(
        <div>
            <Navigation></Navigation>
            <div className="container">
                <div className="containermapa">
                    <div className="">
                        <MapComponent changeOficina={setOficina} markers={markers}/>

                    </div>
                    <Oficina></Oficina>
                </div>
                
            </div>
            <Footer></Footer>
        </div>
    )

}

export default Main