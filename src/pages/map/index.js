import React, { useEffect,useRef,useState,useCallback} from 'react';
//import {Wrapper,Status} from '@googlemaps/react-wrapper'
import GoogleMaps from 'simple-react-google-maps'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
const Main = () => {

    const [zoom,setZoom] = useState(10);
    const [center,setCenter]  = useState( { lat: -12.0194382, lng: -77.1112782 });

 
    const containerStyle = {
      width: '100%',
      height: '400px'
    };
  

    useEffect(() => {
      if (navigator.geolocation) {
          console.log('Geolocation is supported!');    
          var geoOptions = {
              maximumAge: 5 * 60 * 1000,
              timeout: 10*1000,
              enableHighAccuracy: true
          }
        

          const geoSuccess=(position)=>{
            console.log('cordenadas encontradas');
            console.log('a',center);
            setCenter({lat:position.coords.latitude,lng:position.coords.longitude});
            console.log('position',position);
            console.log(center);
          }

          var geoError = function(error) {
              console.log('Error occurred. Error code: ' + error.code);
              // error.code can be:  0: unknown error  1: permission denied   2: position unavailable (error response from location provider)  3: timed out
          };
          navigator.geolocation.watchPosition(geoSuccess, geoError, geoOptions);
      }
      else {
          console.log('Geolocation is not supported for this Browser/OS.');
      }
    },[]);

    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: "AIzaSyCVfy_GfhhUNoOSFWelrEwE28PLWCGScrU"
    })
  
    const [map, setMap] = useState(null)
  
    const onLoad = useCallback(function callback(map) {
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);
      setMap(map)
    }, [])
  
    const onUnmount = useCallback(function callback(map) {
      setMap(null)
    }, [])
    
    return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        style={{height:"500px",width:"100%"}}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
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
