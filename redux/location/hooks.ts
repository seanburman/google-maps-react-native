import { useAppSelector } from "../hooks"
import * as Location from 'expo-location'
import { useEffect, useState } from 'react';
import { storeDetails } from "./utils";

const useLocation = () => {
    const { currentLocation } = useAppSelector(state => state)
    const [ watcher, setWatcher ] = useState<Location.LocationSubscription | null>(null);
    const [ error, setError ] = useState<any>(null);

    useEffect(() => {
        (() => {
        Location.watchPositionAsync(
            {
                accuracy: Location.Accuracy.Highest,
                distanceInterval: 1,
            }, 
            ({coords}) => {
            storeDetails(coords);
        }).then((locationWatcher) => {
            setWatcher(locationWatcher);
        }).catch((err) => {
            setError(err)
        })
        })()
    }, [])

  return [currentLocation, watcher, error]
}

const useInitialLocation = () => {
    const [location, setLocation] = useState<Location.LocationObject | null>(null);
    const [errorMsg, setErrorMsg] = useState<string |null>(null);

    useEffect(() => {
    (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
        }
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
    })();
    }, []);

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }

    return [location, errorMsg]
}

export {
    useLocation,
    useInitialLocation
}