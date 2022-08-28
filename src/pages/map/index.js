import React,{useState,useEffect} from "react";

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
  lat: -12.0240527,
  lng: -77.1142247
};

class Map extends React.Component {

  constructor(props) {
    super(props);
    this.state= {
    markers: this.props.markers};   //1.initialize initial state from props
  }

  state = {
    isInfoOpen: false,
    selectedMarkerId: null, 
    noOfClusters: null
  };

 
  onClick = (isInfoOpen, selectedMarkerId) => {
    this.setState({
      isInfoOpen, 
      selectedMarkerId
    });
  };
 

  render() {
    const { isInfoOpen, selectedMarkerId } = this.state; 
    return (
      <LoadScript googleMapsApiKey={key} >
        <div>
          <div style={{ width: "100%", height: 500, display: "flex" }} >
            <GoogleMap options={mapOptions} center={defaultLocation}
              zoom={12}
              onLoad={this.onMapMounted}
              onIdle={this.onMapIdle}
              onBoundsChanged={this.onBoundsChanged}
              onZoomChanged={this.onZoomChanged}
              mapContainerStyle={{ flex: 1 }}
            >
              <MarkerClusterer averageCenter enableRetinaIcons gridSize={60}>
                {clusterer =>
                  this.props.markers.map(markerData => (
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
/*
const Map = (props)=>{
  const key = "AIzaSyCVfy_GfhhUNoOSFWelrEwE28PLWCGScrU";
  const defaultLocation = {
    lat: 37.9755691,
    lng: 23.7361789
  };
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

  const onClick = (isInfoOpen, selectedMarkerId)=>{
    setIsInfoOpen(isInfoOpen)
    setSelectedMarkerId(selectedMarkerId)
  }


  const [isInfoOpen,setIsInfoOpen] = useState(false);
  const [selectedMarkerId,setSelectedMarkerId] = useState(null);
  const [noOfClusters,setNoOfClusters] = useState(null);
  const [markers,setMarkers] = useState(props.markers)

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
                markers.map(markerData => (
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
*/
  export default Map

