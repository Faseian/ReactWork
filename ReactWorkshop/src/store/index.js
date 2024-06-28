import {configureStore} from "@reduxjs/toolkit"
import animesReducer from './animes'
import genresReducer from './genres'
export const store = configureStore( {
    reducer: {
        animes: animesReducer,
        genres: genresReducer
    }
})