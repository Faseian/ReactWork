import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const url = 'https://anime-db.p.rapidapi.com/anime';
const options = {
    method: 'GET',
    params: {
        page: '1',
        size: '10'
    },
    headers: {
        'x-rapidapi-key': '80e8cae6e6mshb20aa21a8f7babbp1602c6jsna179ded48bab',
        'x-rapidapi-host': 'anime-db.p.rapidapi.com'
    }
}
export const fetchAnimes = createAsyncThunk(
    'animes/fetchAnimes',
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