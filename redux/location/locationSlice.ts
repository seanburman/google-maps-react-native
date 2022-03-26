import { createSlice } from "@reduxjs/toolkit";
import { DefaultState } from "./interfaces"

const initialState : DefaultState = {
    region: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    },
    currentLocation: {
        details: null,
        watcher: null,
        error: null
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
        _storeWatcher(state, action) {
            state.currentLocation.watcher = action.payload
        },
        _storeError(state, action) {
            state.currentLocation.error = action.payload
        },
    },
    extraReducers: (builder) => {
    }
})

export const { 
    _storeRegion,
    _storeDetails,
    _storeWatcher,
    _storeError 
} = locationSlice.actions

export default locationSlice.reducer