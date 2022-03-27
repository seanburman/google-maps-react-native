import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { MapStyleElement, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { useLocation } from '../../redux/location/hooks';
import { DragImageMarker } from '../Markers/Markers';
import Loading from '../Loading/Loading';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { storeRegion } from '../../redux/location/utils';

const MapComponent: React.FC = () =>{
  const [location, region] = useLocation()


  const latitude: number | undefined = location.details?.latitude
  const longitude: number | undefined = location.details?.longitude

  if(!latitude || !longitude || region?.latitude == 0 || region?.longitude == 0) {
    return <Loading icon='map'/>
  }

  console.log(latitude, longitude)
  console.log(region)
  
  return (
    <>
    {
        latitude && longitude && 
        <MapView
            style={{
                width: '100%',
                flex: 8,
            }}
            //ref={ref => {map = ref}}
            showsCompass
            showsIndoors
            initialRegion={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.0022,
            longitudeDelta: 0.0021,
            }}
            //onRegionChange={(region) => storeRegion(region)}
            provider={PROVIDER_GOOGLE}
            customMapStyle={mapStyle}
            //showsUserLocation={true}
            followsUserLocation={true}
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
    </>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
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