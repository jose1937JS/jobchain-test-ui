import React, { useRef, useState } from 'react'
import { StyleSheet, TouchableOpacity, View, Alert } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { Region } from '../types'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function SearchScreen() {
    const initialRegion = {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }
    const [location, setLocation] = useState<Region>(initialRegion);
    const mapRef = useRef<MapView>(null);

    const onSetMyLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permission to access location was denied');
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        const newRegion = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
        }

        mapRef.current?.animateToRegion(newRegion, 1000);

        setLocation(newRegion);
    }

    return (
        <View style={styles.container}>
            <MapView
                ref={mapRef}
                style={styles.map}
                region={location}
                initialRegion={initialRegion}
            >
                <Marker
                    coordinate={{
                        latitude: location.latitude,
                        longitude: location.longitude
                    }}
                    title="Mi posición"
                    description="Yo estoy aquí!"
                />
                <TouchableOpacity
                    onPress={onSetMyLocation}
                    style={styles.goToMyLocationButtom}
                >
                    <MaterialIcons name="my-location" size={30} color="black" />
                </TouchableOpacity>
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'black',
        fontSize: 26
    },
    map: {
        width: '100%',
        height: '100%',
    },
    goToMyLocationButtom: {
        width: 40,
        height: 40,
        position: 'absolute',
        bottom: 30,
        right: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        padding: 5,
        backgroundColor: '#ffffff8b'
    }
})

// primary color: #7876e9
// dark: #0d102b