import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getAnimePath from "./requests";
import axios from "axios";

//Fetches animes from server route to API
export const fetchAnimes = createAsyncThunk(
    'animes/fetchAnimes',
    async(path, thunkAPI)=> {
        try {
            const res = await axios.get(path, {
                headers: 'application/json'
            })
            .then((res) => res.data.data
        );
            return res;
        } catch (error) {
            throw error;
        }
    }
);

export const animesSlice = createSlice({
    name:'animes',
    initialState:{
        list:[]
    },
    reducers:{
        
    },
    extraReducers(builder) {
        builder
        .addCase(fetchAnimes.pending,(state)=>{
            state.loading = true;
        })
        .addCase(fetchAnimes.fulfilled,(state,action)=>{
            state.loading = false;
            state.list =  action.payload;
        })
        .addCase(fetchAnimes.rejected,(state)=>{
            console.log("rejected");
        })
    }
})
export const {addAnimeGenre} = animesSlice.actions;
export default animesSlice.reducer;