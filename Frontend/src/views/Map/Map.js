import React, {Component} from 'react';
import {DirectionsRenderer, GoogleMap, withGoogleMap} from "react-google-maps";
import canUseDOM from "can-use-dom";
import raf from "raf";
import style from "./customMapStyle.json"
import mapStyle from "./customMapStyle.json"
import { Card, Container, Row } from "reactstrap";
import Header from "components/Headers/Header.js";


const geolocation = (
    canUseDOM && navigator.geolocation ?
        navigator.geolocation :
        ({
            getCurrentPosition(success, failure) {
                failure(`Your browser doesn't support geolocation.`);
            },
        })
);

const GeolocationGMap = withGoogleMap(props => (
        <GoogleMap
            ref={props.onMapLoad}
            defaultZoom={12}
            defaultOptions={{
                styles: mapStyle
            }
            }
            center={props.center}
            // style={style}
            // googleMapURL={googleMapURL}
        >
            {/*{props.center && (*/}
            {/*<InfoWindow position={props.center}>*/}
            {/*<div>{props.content}</div>*/}
            {/*</InfoWindow>*/}
            {/*)}*/}
            {/*{props.center && (*/}
            {/*<Circle*/}
            {/*center={props.center}*/}
            {/*radius={props.radius}*/}
            {/*options={{*/}
            {/*fillColor: `red`,*/}
            {/*fillOpacity: 0.20,*/}
            {/*strokeColor: `red`,*/}
            {/*strokeOpacity: 1,*/}
            {/*strokeWeight: 1,*/}
            {/*}}*/}
            {/*/>*/}
            {/*)}*/}
            {/*Directions:*/}
            {props.directions && <DirectionsRenderer directions={props.directions} />}
        </GoogleMap>
    )
);

export default class mainMapComp extends Component {
    state = {
        //Directions:
        origin: { lat: 6.15, lng: -75.367},
        destination: {lat: 6.217, lng:  -75.567},
        directions: null,
        style: style,
        //Geolocation:
        center: null,
        content: null,
        radius: 6000
    };

    isUnmounted = false;

    componentDidMount() {
        //  GoogleMap.DirectionsService()
        //  //Set directions from A to B  (to be merged with db)
        //  const DirectionsService = new GoogleMap.DirectionsService();
        // GoogleMap.DirectionsService().route({
        //      origin: this.state.origin,
        //      destination: this.state.destination,
        //      travelMode: GoogleMap.TravelMode.DRIVING,
        //  }, (result, status) => {
        //      if (status === DirectionsRenderer.OK) {
        //          this.setState({
        //              directions: result,
        //          });
        //      } else {
        //          console.error(`error fetching directions ${result}`);
        //      }
        //  });

        // const DirectionsService = new google.maps.DirectionsService();
        // DirectionsService.route({
        //     origin: this.state.origin,
        //     destination: this.state.destination,
        //     travelMode: google.maps.TravelMode.DRIVING,
        // }, (result, status) => {
        //     if (status === google.maps.DirectionsStatus.OK) {
        //         this.setState({
        //             directions: result,
        //         });
        //     } else {
        //         console.error(`error fetching directions ${result}`);
        //     }
        // });

        //Get current location
        const tick = () => {
            if (this.isUnmounted) {
                return;
            }
            this.setState({ radius: Math.max(this.state.radius - 20, 0) });

            if (this.state.radius > 200) {
                raf(tick);
            }
        };
        geolocation.getCurrentPosition((position) => {
            if (this.isUnmounted) {
                return;
            }
            this.setState({
                center: {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                },
                content: `Encuentra a tu alrededor!`,
            });

            raf(tick);
        }, (reason) => {
            if (this.isUnmounted) {
                return;
            }
            this.setState({
                center: {
                    lat: 60,
                    lng: 105,
                },
                content: `Error: The Geolocation service failed (${reason}).`,
            });
        });
    }

    componentWillUnmount() {
        this.isUnmounted = true;
    }

    render() {
        return (
            <>
            <Header />
            {/* Page content */}
            <Container style={{marginBottom:"10%"}}></Container>
            <Container className="mt--7" fluid>
        <Row>
        <div className="col">
            <Card className="shadow border-0">
            <GeolocationGMap
                containerElement={
                    <div style={{ height: `40vh` }} />
                }
                mapElement={
                    <div style={{ height: `42vh` }} />
                }
                center={this.state.destination}
                directions={this.state.directions}

                // center={this.state.center}
                content={this.state.content}
                radius={this.state.radius}
            />
            </Card>
          </div>
        </Row>
      </Container>
            </>
        );
    };
}
