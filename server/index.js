import express from 'express'
import {xss} from 'express-xss-sanitizer'
require('dotenv');

const app = express();

app.use(xss());

const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})