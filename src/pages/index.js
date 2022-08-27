import React, { useEffect,useRef,useState } from 'react';
import {Wrapper,Status} from '@googlemaps/react-wrapper'
const Main = () => {

    const [center,setCenter] = useState(0);
    const [zoom,setZoom] = useState( { lat: -34.397, lng: 150.644 });
   

  return (
    <Wrapper apiKey="AIzaSyBI-kdtUj0qLtFHl7tvDhMRtKktakIj-9Q" render={render}>
      <MyMapComponent center={center} zoom={zoom} />
    </Wrapper>
  );
}
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
  
export default Main;
