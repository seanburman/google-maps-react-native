import { useAppSelector } from "../hooks"
import * as Location from 'expo-location'
import { useEffect, useState } from 'react';
import { storeDetails } from "./utils";
import { Region } from "../../Types";

const useLocation = () => {
    const { currentLocation, region } = useAppSelector(state => state)
    const [ watcher, setWatcher ] = useState<Location.LocationSubscription | null>(null);
    const [ error, setError ] = useState<any>(null);
    const [location, setLocation] = useState<Location.LocationObjectCoords | null>(null)
    const [currentRegion, setCurrentRegion] = useState<Region | null>(null)

    useEffect(() => {
        setCurrentRegion(region)
    },[region])

    useEffect(() => {
        (() => {
        Location.watchPositionAsync(
            {
                accuracy: Location.Accuracy.BestForNavigation,
                distanceInterval: 1,
                //timeInterval: 100
            }, 
            ({coords}) => {
            storeDetails(coords);
            setLocation(coords)
        }).then((locationWatcher) => {
            setWatcher(locationWatcher);
        }).catch((err) => {
            setError(err)
        })
        })()
    }, [])

  return [location, currentRegion, watcher, error]
}

export {
    useLocation
}

// useEffect(() => {
//     (() => {
//     Location.watchPositionAsync(
//         {
//             accuracy: Location.Accuracy.BestForNavigation,
//             distanceInterval: 1,
//             //timeInterval: 100
//         }, 
//         ({coords}) => {
//         setCurrentLocation(coords);
//     }).then((locationWatcher) => {
//         setWatcher(locationWatcher);
//     }).catch((err) => {
//         setErrorMsg(err)
//     })
//     })()
// }, [])