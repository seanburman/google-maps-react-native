import { LocationObjectCoords, LocationSubscription } from "expo-location";
import { Region } from "../../Types";
import { store } from "../store";
import { _storeDetails, _storeError, _storeRegion, _storeWatcher } from "./locationSlice";

const storeRegion = (region: Region) => {
    store.dispatch(_storeRegion(region))
}

const storeDetails = (details: LocationObjectCoords) => {
    store.dispatch(_storeDetails(details))
}

const storeWatcher = (watcher: LocationSubscription) => {
    store.dispatch(_storeWatcher(watcher))
}

const storeError = (error: any) => {
    store.dispatch(_storeError(error))
}

export {
    storeRegion,
    storeDetails,
    storeWatcher,
    storeError
}