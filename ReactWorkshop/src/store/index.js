import {configureStore} from "@reduxjs/toolkit"
import animesReducer from './animes'
export const store = configureStore( {
    reducer: {
        animes: animesReducer
    }
})