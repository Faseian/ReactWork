import 'dotenv/config';
import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors'
import bodyParser from 'body-parser';

import {xss} from 'express-xss-sanitizer'

import routes from './routes/index.js'

const app = express();
const urlencodedParser = bodyParser.urlencoded({extended: false})

//const mongoURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_Pass}@${process.env.DB_HOST}?retryWrites=true&w=majority`;

//mongoose.connect(mongoURI);

app.use(cors())
app.use(xss());

const port = process.env.PORT || 3001;

app.use('/api', urlencodedParser, routes)

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})