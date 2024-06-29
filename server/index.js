import 'dotenv/config';
import express from 'express'
import axios from 'axios';
import cors from 'cors'

import {xss} from 'express-xss-sanitizer'

const app = express();

app.use(cors())
app.use(xss());

const port = process.env.PORT || 3001;

const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': process.env.APIKEY,
        'x-rapidapi-host': process.env.APIHOST
    }
}

async function fetchGenres() {
    try {
        const res = await axios.get(options);
        return res
    } catch (error) {
        console.log(error);
    }
}

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})