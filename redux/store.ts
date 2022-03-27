import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";
import locationReducer from './location/locationSlice'
import { composeWithDevTools, } from "redux-devtools-extension";

const store = createStore(
    locationReducer,
    composeWithDevTools()
)

// const store = configureStore({
//     reducer: {
//         location: locationReducer
//     },

// },)

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export {
    store,
    RootState,
    AppDispatch
}