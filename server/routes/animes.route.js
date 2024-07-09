import express from 'express'
import {getAnimes, getGenres} from '../controllers/animes.controller.js'
const router = express.Router();

router.get('/genres', getGenres.listGenres);
router.get('/animes', getAnimes.listAnimes);

export default router;