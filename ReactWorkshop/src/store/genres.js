import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchGenres = createAsyncThunk(
    'genres/fetchGenres',
    async(thunkAPI)=> {
        try {
            const res = await axios.get(`http://localhost:3000/api/animes/genres`).then((res) => res.data
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