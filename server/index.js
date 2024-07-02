import 'dotenv/config';
import express from 'express'
import axios from 'axios';
import cors from 'cors'

import {xss} from 'express-xss-sanitizer'

const app = express();

app.use(cors())
app.use(xss());

const port = process.env.PORT || 3001;

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

app.get('/genres', async (req,res) => {
    const response = await axios.get("https://anime-db.p.rapidapi.com/genre", genreOptions)
    .then(function(response) {
        res.json({data: response.data})
    })
    .catch(error => console.log(error));
})

app.get('/animes', async (req,res) => {
    const response = await axios.get("https://anime-db.p.rapidapi.com/anime", animeOptions)
    .then(function(response) {
        res.json({data: response.data})
    })
    .catch(error => console.log(error));
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})