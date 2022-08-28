import React from "react";
import axios from 'axios';
import { GoogleMap, LoadScript, MarkerClusterer } from "@react-google-maps/api";
import MapMarker from '../.././components/pages/MapMarkerComponent'
import { api, apiConfig } from '../../util/api';
import { useGetApiWs, useChangeDocTitle } from '../../hooks/index';

const mapOptions = {
  fullscreenControl: false,
  streetViewControl: false,
  mapTypeControl: false,
  styles: [
    {
      featureType: "poi",
      elementType: "labels",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "transit",
      elementType: "all",
      stylers: [
        {
          visibility: "off"
        }
      ]
    }
  ]
};
const key = "AIzaSyCVfy_GfhhUNoOSFWelrEwE28PLWCGScrU"; // PUT GMAP API KEY HERE
const defaultLocation = {
  lat: 37.9755691,
  lng: 23.7361789
};

class Map extends React.Component {
  state = {
    isInfoOpen: false,
    selectedMarkerId: null,
    noOfClusters: null,
    markers: []
  };


  
  onClick = (isInfoOpen, selectedMarkerId) => {
    this.setState({
      isInfoOpen,
      selectedMarkerId
    });
  };

  fetchOficinas = async ()=>{
    const oficinas = await axios.get(process.env.REACT_APP_URL_API+'Oficinas');
    const response = oficinas.data;
    console.log(response);
    this.setState({
      markers:oficinas.data.map((e)=>{        
        return {
          id:e.id,
          lat:parseFloat(e.latitud),
          lng:parseFloat(e.longitud)
        }
      })
    })
  }

  render() {
    const { isInfoOpen, selectedMarkerId } = this.state;
    if(this.state.markers.length==0){
      this.fetchOficinas()
    }
    return (
      <LoadScript googleMapsApiKey={key} >
        <div>
          <div style={{ width: "100%", height: 500, display: "flex" }} >
            <GoogleMap
              options={mapOptions}
              center={defaultLocation}
              zoom={18}
              onLoad={this.onMapMounted}
              onIdle={this.onMapIdle}
              onBoundsChanged={this.onBoundsChanged}
              onZoomChanged={this.onZoomChanged}
              mapContainerStyle={{ flex: 1 }}
            >
              <MarkerClusterer averageCenter enableRetinaIcons gridSize={60}>
                {clusterer =>
                  this.state.markers.map(markerData => (
                    <MapMarker
                      key={markerData.id}
                      clusterer={clusterer}
                      markerData={markerData}
                      isSelected={markerData.id === selectedMarkerId}
                      isInfoOpen={
                        markerData.id === selectedMarkerId && isInfoOpen
                      }
                      onClick={() => this.onClick()}
                    />
                  ))
                }
              </MarkerClusterer>
            </GoogleMap>  
          </div>
        </div>
      </LoadScript>
    );
  }
}


  export default Map

