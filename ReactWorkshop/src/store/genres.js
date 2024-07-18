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
        removeGenres(genres) {
            for(let i = 0; i < genres.length; i++) {
                if (genres[i] === 'Hentai' || genres[i] === 'Ecchi' || genres[i] === 'Boys Love' || genres[i] === 'Girls Love' || genres[i] === 'Erotica') {
                  const genre = genres.splice(i, 1);
                  this.setState({
                    list: genre
                  })
                }
            }
           }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchGenres.pending, (state) => {
            state.pending = true;
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

export const {removeGenres} = genresSlice.actions;
export default genresSlice.reducer;