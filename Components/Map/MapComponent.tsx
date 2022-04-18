import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { MapStyleElement, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { useLocation } from '../../redux/location/hooks';
import { DragImageMarker } from '../Markers/Markers';
import Loading from '../Loading/Loading';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import { useInitialLocation, } from '../../redux/location/hooks';
import * as Location from "expo-location";
import { Region } from '../../Types';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { ParamListBase, RouteProp } from '@react-navigation/native';

interface Props {
  navigation: BottomTabNavigationProp<ParamListBase>
  route: RouteProp<ParamListBase>
}

const MapComponent: React.FC<Props> = ({route}) =>{

  console.log(route.params)
  const [location] = useLocation()
  const [initialLocation, error] = useInitialLocation() as [Location.LocationObject | null, string | null]
  const [loaded, setLoaded] = useState(false)
  const [region, setRegion] = useState<Region | null>()
  const latitude: number | undefined = location.details?.latitude
  const longitude: number | undefined = location.details?.longitude
  
  //TODO: Handle location error

  const delta = {
    latitudeDelta: 0.0022,
    longitudeDelta: 0.0021,
  }

  useEffect(() => {
    if(initialLocation && !loaded) {
      setRegion({...initialLocation!.coords, ...delta});
      setLoaded(true)
    }
  },[initialLocation])

  if(!latitude || !longitude || !loaded || !initialLocation || !region) {
    return <Loading icon='map'/>
  }

  let map: MapView

  return (
    <>
    {
        latitude && longitude && 
        <MapView
            style={{
                width: '100%',
                flex: 8,
            }}
            showsCompass
            showsIndoors
            initialRegion={region}
            onRegionChangeComplete={(region) =>setRegion(region)} // Store this elsewhere for dropping markers 
            userLocationCalloutEnabled={true}
            provider={PROVIDER_GOOGLE}
            customMapStyle={mapStyle}
            ref={(_map) => map = _map!}
            //showsUserLocation={true}
            followsUserLocation={false}
            onTouchEnd={() => console.log("Touch end: icons will gain transparency")}
            toolbarEnabled={true}
        >
          {
            <Marker 
            coordinate={{ latitude : latitude , longitude : longitude }}
            >
              <MaterialCommunityIcons name="human-handsdown" size={50} color="#FFD20A" style={styles.container}
              />  
            </Marker>

          }
          <DragImageMarker 
            callBack={(coords) => console.log(coords)}
          />
          
        </MapView>
    }
    <View style={styles.locationButton}>
      <TouchableOpacity onPress={() => map.animateCamera({center: {latitude: latitude, longitude: longitude}})}>
        <MaterialIcons name="my-location" size={40} color="grey" />
      </TouchableOpacity>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    locationButton: {
      position: 'absolute',
      bottom: 12,
      right: 12,
      backgroundColor: 'white',
      borderRadius: 100,
      padding: 10,
      opacity: 0.7,
      shadowOpacity: 0.7,
      shadowColor: 'black',
      shadowOffset: {
        height: 1,
        width: 1
      }
    },
    personIcon: {
      shadowColor: 'black',
      shadowOpacity: 1,
      shadowOffset: {
        height: 1,
        width: 1
      }
    }
})

const mapStyle: MapStyleElement[] = [
  {
    "featureType": "landscape.natural",
    "stylers": [
      {
        "color": "#20927f"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "elementType": "labels.icon",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "elementType": "labels.text",
    "stylers": [
      {
        "color": "#000000"
      },
      {
        "weight": 0.5
      }
    ]
  },
  {
    "featureType": "poi.business",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.government",
    "elementType": "labels.text",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "poi.government",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "poi.government",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "visibility": "off"
      },
      {
        "weight": 0.5
      }
    ]
  },
  {
    "featureType": "poi.medical",
    "stylers": [
      {
        "color": "#68c4ad"
      }
    ]
  },
  {
    "featureType": "poi.medical",
    "elementType": "labels.text",
    "stylers": [
      {
        "color": "#f5f759"
      }
    ]
  },
  {
    "featureType": "poi.medical",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#000000"
      },
      {
        "weight": 0.5
      }
    ]
  },
  {
    "featureType": "poi.place_of_worship",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "poi.place_of_worship",
    "elementType": "labels.text",
    "stylers": [
      {
        "weight": 0.5
      }
    ]
  },
  {
    "featureType": "poi.place_of_worship",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "stylers": [
      {
        "weight": 5
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#000000"
      },
      {
        "weight": 0.5
      }
    ]
  },
  {
    "featureType": "road.highway",
    "stylers": [
      {
        "color": "#363636"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#b8b8b8"
      }
    ]
  },
  {
    "featureType": "road.local",
    "stylers": [
      {
        "color": "#ffffff"
      },
      {
        "weight": 1.5
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#000000"
      },
      {
        "weight": 0.5
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text",
    "stylers": [
      {
        "color": "#000000"
      },
      {
        "weight": 0.5
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#ffffff"
      },
      {
        "weight": 2.5
      }
    ]
  },
  {
    "featureType": "transit.station.bus",
    "elementType": "labels.icon",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "transit.station.bus",
    "elementType": "labels.text",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "transit.station.bus",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "transit.station.bus",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "transit.station.rail",
    "elementType": "labels.icon",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "transit.station.rail",
    "elementType": "labels.text",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "transit.station.rail",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#000000"
      },
      {
        "weight": 1.5
      }
    ]
  },
  {
    "featureType": "transit.station.rail",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#000000"
      },
      {
        "weight": 0.5
      }
    ]
  }
]

export default MapComponent