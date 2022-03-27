import * as Location from 'expo-location'
import { Region } from "../../Types";

interface DefaultState {
    region: Region,
    currentLocation: {
        details: Location.LocationObjectCoords | null,
    }
}

export {
    DefaultState,
}