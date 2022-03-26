import { configureStore } from "@reduxjs/toolkit";
import locationReducer from './location/locationSlice'

const store = configureStore({
    reducer: {
        location: locationReducer
    }
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export {
    store,
    RootState,
    AppDispatch
}