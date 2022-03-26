import { useAppSelector } from "../hooks"
import * as Location from 'expo-location'
import { useEffect, useState } from 'react';
import { storeDetails, storeError, storeWatcher } from "./utils";

const useLocation = () => {
    const { location } = useAppSelector(state => state)

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
        }).then((locationWatcher) => {
            storeWatcher(locationWatcher);
        }).catch((err) => {
            storeError(err)
        })
        })()
    }, [])

  return location
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