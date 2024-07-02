import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAnimes = createAsyncThunk(
    'genres/fetchAnimes',
    async(thunkAPI)=> {
        try {
            const res = await axios.get(`http://localhost:3000/animes`).then((res) => res.data
        );
            return res; 
        } catch (error) {
            console.log(error);
        }
    }
);

export const animesSlice = createSlice({
    name:'animes',
    initialState:{
        list:[]
    },
    reducers:{
        addAnime:(state)=> {
            
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchAnimes.pending,(state)=>{
            state.loading = true;
            
        })
        .addCase(fetchAnimes.fulfilled,(state,action)=>{
            state.loading = false;
            state.list = action.payload;
        })
        .addCase(fetchAnimes.rejected,(state)=>{
            console.log("rejected")
        })
    }
})

export const {addAnime} = animesSlice.actions;
export default animesSlice.reducer;