import 'dotenv/config';
import express from 'express'
import cors from 'cors'

import {xss} from 'express-xss-sanitizer'

import routes from './routes/index.js'

const app = express();

app.use(cors())
app.use(xss());

const port = process.env.PORT || 3001;

app.use('/api', routes)

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})