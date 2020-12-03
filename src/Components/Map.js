import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    View,
    StatusBar,
    TouchableOpacity,
    Platform,
    Text
} from "react-native";
import MapView, { Marker, Callout } from 'react-native-maps';
import { _ } from 'lodash';
import FusedLocation from 'react-native-fused-location';

const latDelta = 0.91
const longDelta = 0.8

export default class Map extends Component {
    constructor() {
        super();
        this.state = {
            Region: {
                latitude: 21.033985,
                longitude: 85.918584,
                latitudeDelta: latDelta,
                longitudeDelta: longDelta,
            },
            markerList: []
        }
        this.mapRef = ""
    }

    componentDidMount() {
        this.getCurrentLocation();
    }

    async getCurrentLocation() {
        const location = await FusedLocation.getFusedLocation();
        alert(JSON.stringify(location))
    }

    render() {
        let Markers = this.state.markerList
        return (

            <View style={{ flex: 1 }}>
                <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
                <MapView
                    ref={(ref) => { this.mapRef = ref }}
                    mapType="standard"
                    fitToElements={true}
                    region={this.state.Region}
                    style={{ flex: 1 }}
                >
                    {Markers.length != 0 ? Markers.map(marker => (<Marker
                        showsCompass={false}
                        coordinate={marker.coordinate}
                        title={marker.key}
                        tracksViewChanges={true}
                        key={marker.key}
                    >
                    </Marker>)) : null}


                </MapView>
            </View>
        );
    }
}

var styles = StyleSheet.create({

});

