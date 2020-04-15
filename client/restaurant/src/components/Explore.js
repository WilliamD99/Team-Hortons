import React, { Component } from 'react'
import { withGoogleMap, GoogleMap, Marker, withScriptjs } from "react-google-maps"
import { InfoBox } from "react-google-maps/lib/components/addons/InfoBox"
import { withProps, compose, withStateHandlers } from "recompose"

export default class Explore extends Component {
    render() {
        const GoogleMapExample = compose(withProps({
            googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3&key=AIzaSyCZVJCN9TzYqSwQ_KBRX1d0C1h54abwg-0",
            containerElement: <div style={{ height: `500px`, width: '500px' }} />,
            mapElement: <div style={{ height: `100%` }} />,
            loadingElement: <div style={{ height: `100%`, width: `100%` }} />,
        })(withScriptjs(withGoogleMap(props => (
            <GoogleMap
                defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
                defaultZoom={13}
            >

                <>
                    <Marker position={{ lat: -34.397, lng: 150.644 }} />
                    <Marker position={{ lat: -50.397, lng: 150.644 }} />
                </>
            </GoogleMap>
        )))));
        return (
            <div className="mt-3">
                <GoogleMapExample>
                </GoogleMapExample>
            </div>
        )
    }
}
