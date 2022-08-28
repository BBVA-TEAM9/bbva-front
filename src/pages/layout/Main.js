import React,{useEffect, useState} from 'react';
import Footer from './Footer'
import Navigation from './Navigation'
import axios from 'axios';
import MapComponent from '../map'
import Oficina from '../oficina'
import './Main.css'
import { env } from 'tailwindcss/lib/lib/sharedState';

const Main = (props)=>{

    const [markers,setMarkers] = useState([]);    
    const [oficina,setOficina] = useState(null);

    const fetchOficinas = async ()=>{
        const oficinas = await axios.get(process.env.REACT_APP_URL_API+'Oficinas');
        const response = oficinas.data;
        const markerss = response.map((e)=>{        
            return {
              id:e.id,
              lat:parseFloat(e.latitud),
              lng:parseFloat(e.longitud)
            }
          })
        setMarkers(markerss)
      }
    
      useEffect(() => {
        fetchOficinas()
      },[]);

    const changeOficina =async (e)=>{
        const oficina = await axios.get(process.env.REACT_APP_URL_API+'Oficinas/'+e.id);
       setOficina(oficina.data)
    }

    return(
        <div>
            <Navigation></Navigation>
            <div className="">
                <div className="containermapa">
                    <div className="">
                        <MapComponent changeOficina={changeOficina} markers={markers}/>

                    </div>
                    <Oficina oficina={oficina}></Oficina>
                </div>
                
            </div>
            <Footer></Footer>
        </div>
    )

}

export default Main