import React, { useEffect,useRef,useState } from 'react';
//import {Wrapper,Status} from '@googlemaps/react-wrapper'
import GoogleMaps from 'simple-react-google-maps'
const Main = () => {

    const [zoom,setZoom] = useState(15);
    const [center,setCenter]  = useState( { lat: -12.0936588, lng: -77.0213396 });
   

  return (
    <GoogleMaps apiKey={'AIzaSyCVfy_GfhhUNoOSFWelrEwE28PLWCGScrU'} zoom={zoom} center={center} style={{height:"500px",width:"80%"}}/>
  );
}/* 
const render = (status)=> {
    if (status === Status.LOADING) return <h3>{status} ..</h3>;
    if (status === Status.FAILURE) return <h3>{status} ...</h3>;
    return null;
  };
  
  const MyMapComponent= (center,zoom)=> {
    const ref = useRef();
  
    useEffect(() => {
      new window.google.maps.Map(ref.current, {
        center,
        zoom,
      });
    });
  
    return <div ref={ref} id="map" />;
  }
   */
export default Main;
