import { createSlice } from "@reduxjs/toolkit";
import { DefaultState } from "./interfaces"

const initialState : DefaultState = {
    region: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
        pending: false
    },
    currentLocation: {
        details: null,
    }
}

const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        _storeRegion(state, action) {
            state.region = action.payload;
        },
        _storeDetails(state, action) {
            state.currentLocation.details = action.payload
        },
        _goToCurrentLocation(state) {
            if(state.currentLocation.details?.latitude && state.currentLocation.details?.longitude) {
                state.region.pending = true
                state.region.latitude = state.currentLocation.details.latitude
                state.region.longitude = state.currentLocation.details.longitude
            }
            state.region.pending = false
        }
    },
    extraReducers: (builder) => {
    }
})

export const { 
    _storeRegion,
    _storeDetails,
    _goToCurrentLocation,
} = locationSlice.actions

export default locationSlice.reducer