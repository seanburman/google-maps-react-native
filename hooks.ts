import * as Location from 'expo-location'
import { useEffect, useState } from 'react';

export const useLocation = () => {
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [watcher, setWatcher] = useState<any>(null);
    const [currentLocation, setCurrentLocation] = useState<Location.LocationObjectCoords | null>(null);

    useEffect(() => {
        (() => {
        Location.watchPositionAsync(
            {
                accuracy: Location.Accuracy.BestForNavigation,
                distanceInterval: 1,
                //timeInterval: 100
            }, 
            ({coords}) => {
            setCurrentLocation(coords);
        }).then((locationWatcher) => {
            setWatcher(locationWatcher);
        }).catch((err) => {
            setErrorMsg(err)
        })
        })()
    }, [])

  return [currentLocation, watcher, errorMsg]
}

// const getLocation = async() => {
//     let { status } = await Location.requestForegroundPermissionsAsync();
//     if (status !== 'granted') {
//       setErrorMsg('Permission to access location was denied');
//       return;
//     }

//     //let location = await Location.getCurrentPositionAsync({accuracy: Location.LocationAccuracy.BestForNavigation});
//     let location = await Location.watchPositionAsync(
//         {accuracy: Location.LocationAccuracy.BestForNavigation},
//         (location) => setLocation(location)
//         );
// }

// useEffect(() => {
//     setTimeout(() => getLocation(), 500);
// },[location])