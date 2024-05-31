import express from 'express'
import {xss} from 'express-xss-sanitizer'

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})