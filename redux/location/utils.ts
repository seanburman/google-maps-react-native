import { LocationObjectCoords, LocationSubscription } from "expo-location";
import { Region } from "../../Types";
import { store } from "../store";
import { _goToCurrentLocation, _storeDetails, _storeRegion} from "./locationSlice";

const storeRegion = (region: Region) => {
    store.dispatch(_storeRegion(region))
}

const storeDetails = (details: LocationObjectCoords) => {
    store.dispatch(_storeDetails(details))
}

const goToCurrentLocation = () => {
    store.dispatch(_goToCurrentLocation())
}

export {
    storeRegion,
    storeDetails,
    goToCurrentLocation
}