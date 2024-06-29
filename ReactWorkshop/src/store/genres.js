import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import 'dotenv/config';
const key = process.env.APIKEY;
const host = process.env.APIHOST;
const url = 'https://anime-db.p.rapidapi.com/genre';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': key,
        'x-rapidapi-host': host
    }
}

export const fetchGenres = createAsyncThunk(
    'genres/fetchGenres',
    async(thunkAPI)=> {
        try {
            const res = await axios.get(url,options).then((res) => res.data
        );
            return res; 
        } catch (error) {
            console.log(error);
        }
    }
);

export const genresSlice = createSlice({
    name: 'genres',
    initialState:{
        list:[]
    },
    reducers: {
        addGenre:(state)=> {
            
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchGenres.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchGenres.fulfilled, (state, action) => {
            state.loading = false;
            state.list = action.payload;
        })
        .addCase(fetchGenres.rejected, (state) => {
            console.log("Rejected");
        })
    }
})

export const {addGenre} = genresSlice.actions;
export default genresSlice.reducer;