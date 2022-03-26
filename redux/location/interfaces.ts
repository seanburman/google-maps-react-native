import * as Location from 'expo-location'
import { Region } from "../../Types";


export interface DefaultState {
    region: Region,
    currentLocation: {
        details: Location.LocationObjectCoords | null,
        watcher: Location.LocationSubscription | null,
        error: any
    }
}