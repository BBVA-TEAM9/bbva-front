import React from "react";
import {Accordion} from 'react-bootstrap';
import { Marker, InfoWindow } from "@react-google-maps/api";


export default class MapMarker extends React.Component {

  constructor(props) {
    super(props);
    this.state= {
    
    };
  }

  state = {
    mapMarker: null,
    showingInfoWindow: false
  };

  onMarkerClick = () => {
    console.log(this.props.markerData)
    this.setState({
      showingInfoWindow: true
    });

  };

  onInfoWindowClose = () =>
    this.setState({
      showingInfoWindow: false
    });

  onLoad = (mapMarker) => {
    this.setState({
      mapMarker
    });
  };

  render() {
    const { clusterer, markerData } = this.props;

    return (
      <Marker
        clusterer={clusterer}
        onLoad={this.onLoad}
        position={{
          lat: markerData.lat,
          lng: markerData.lng
        }}
        clickable
        onClick={this.onMarkerClick}
      >
      </Marker>
    );
  }
}