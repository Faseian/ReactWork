import 'dotenv/config';
import express from 'express'

import {xss} from 'express-xss-sanitizer'

const app = express();

app.use(xss());

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})