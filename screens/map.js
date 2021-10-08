/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
    SafeAreaView,
    View,
} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';


const Map = () => {

    const initialRegion = {
        latitude: 21.014423,
        longitude: 105.801632,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
    };

    return (
        <View style={{ flex: 1, backgroundColor: 'red' }}>
        <MapView
            style={{ flex: 1}}
            provider={PROVIDER_GOOGLE}
            initialRegion={initialRegion}

        />
        </View>
    );
};

export default Map;
