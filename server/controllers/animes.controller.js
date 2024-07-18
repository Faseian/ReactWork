import httpStatus from 'http-status'
import axios from 'axios'

const genreOptions = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': process.env.APIKEY,
        'x-rapidapi-host': process.env.APIHOST
    }
}
let animeOptions = {
    method: 'GET',
    params: {
        page:'1',
        size:'10',
      
    },
    headers: {
        'x-rapidapi-key': process.env.APIKEY,
        'x-rapidapi-host': process.env.APIHOST
    }
}
//Gets genres from API
export const getGenres = {
    async listGenres(req,res) {
        const response = await axios.get("https://anime-db.p.rapidapi.com/genre", genreOptions)
        .then(function(response) {
            res.json({data: response.data})
        })
        .catch(error => console.log(error));
    }
}
//Gets animes from API
export const getAnimes = {
    async listAnimes(req,res) {
        animeOptions.params.genres = req.query.genre;
        const response = await axios.get(`https://anime-db.p.rapidapi.com/anime`, animeOptions)
        .then(function(response) {
            res.json({data: response.data});
        })
        .catch(error => console.log(error));
    }
}

export default {getGenres, getAnimes};