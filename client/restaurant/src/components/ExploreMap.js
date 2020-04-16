import React, { Component } from 'react'
import { GoogleApiWrapper, Map, Marker, InfoWindow } from "google-maps-react"
import { Tab, Tabs, Card, CardContent, CardMedia, Typography } from "@material-ui/core"
import Rating from "@material-ui/lab/Rating";

const renderTab = tabItemData => (
    <Tab key={tabItemData.value} label={tabItemData.label} value={tabItemData.value} />
);

export class ExploreMap extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeMarker: {},
            selectedPlace: {},
            showingInfoWindow: false
        }
    }

    onMarkerClick = (props, marker) =>
        this.setState({
            activeMarker: marker,
            selectedPlace: props,
            showingInfoWindow: true
        });

    onInfoWindowClose = () =>
        this.setState({
            activeMarker: null,
            showingInfoWindow: false
        });

    onMapClicked = () => {
        if (this.state.showingInfoWindow)
            this.setState({
                activeMarker: null,
                showingInfoWindow: false
            });
    };

    render() {
        let markers = this.props.data.map((marker, index) => (
            <Marker key={index} name={marker.name} image={marker.image} cuisines={marker.cuisines} rating={marker.rating.aggregate_rating} onClick={this.onMarkerClick} position={{ lat: marker.location.latitude, lng: marker.location.longitude }} />
        ))
        return (
            <>
                <div className="tabs-container mt-3">
                    <Tabs value={this.props.selectedTab} onChange={this.props.onChange} indicatorColor="primary">
                        {this.props.tabs.map(renderTab)}
                    </Tabs>
                </div>

                <Map
                    className="map mt-3"
                    google={this.props.google}
                    onClick={this.onMapClicked}
                    initialCenter={{
                        lat: 20.5937,
                        lng: 78.9629
                    }}
                    zoom={6}>

                    {markers}

                    <InfoWindow
                        marker={this.state.activeMarker}
                        onClose={this.onInfoWindowClose}
                        visible={this.state.showingInfoWindow}>
                        <Card>
                            <CardMedia component="img" alt="restaurant img" src={this.state.selectedPlace.image} />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h4">
                                    {this.state.selectedPlace.name}
                                </Typography>
                                <Rating name="half-rating-read" defaultValue={this.state.selectedPlace.rating} precision={0.1} size="small" readOnly />
                            </CardContent>
                        </Card>
                    </InfoWindow>
                </Map>
            </>
        )
    }
}
export default GoogleApiWrapper({
    apiKey: "AIzaSyCZVJCN9TzYqSwQ_KBRX1d0C1h54abwg-0"
})(ExploreMap)