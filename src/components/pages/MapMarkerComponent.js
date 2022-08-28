import React from "react";
import {Accordion} from 'react-bootstrap';
import { Marker, InfoWindow } from "@react-google-maps/api";


export default class MapMarker extends React.Component {

  constructor(props) {
    super(props);
    this.state= {
      onClick:this.props.onClick
    };
  }

  state = {
    mapMarker: null,
    showingInfoWindow: false
  };

  onMarkerClick = () => {
    this.setState({
      showingInfoWindow: true
    });
    this.state.onClick(this.props.markerData)

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