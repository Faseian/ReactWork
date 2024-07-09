import httpStatus from 'http-status'
import axios from 'axios'

const genreOptions = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': process.env.APIKEY,
        'x-rapidapi-host': process.env.APIHOST
    }
}
const animeOptions = {
    method: 'GET',
    params: {
        page:'1',
        size:'10',
        genres:'Action'
    },
    headers: {
        'x-rapidapi-key': process.env.APIKEY,
        'x-rapidapi-host': process.env.APIHOST
    }
}

export const getGenres = {
    async listGenres(req,res) {
        const response = await axios.get("https://anime-db.p.rapidapi.com/genre", genreOptions)
        .then(function(response) {
            res.json({data: response.data})
        })
        .catch(error => console.log(error));
    }
}

export const getAnimes = {
    async listAnimes(req,res) {
        const response = await axios.get("https://anime-db.p.rapidapi.com/anime", animeOptions)
        .then(function(response) {
            res.json({data: response.data})
        })
        .catch(error => console.log(error));
    }
}

export default {getGenres, getAnimes};