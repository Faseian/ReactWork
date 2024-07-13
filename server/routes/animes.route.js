import express from 'express'
import {getAnimes, getGenres} from '../controllers/animes.controller.js'
const router = express.Router();
//Creates routes
router.get('/genres', getGenres.listGenres);
router.get('/animes', getAnimes.listAnimes);
router.get('/award-winning', getAnimes.listAnimes)
router.get('/action', getAnimes.listAnimes)
router.get('/suspense', getAnimes.listAnimes)
router.get('/horror', getAnimes.listAnimes)
router.get('/avant-garde', getAnimes.listAnimes)
router.get('/sports', getAnimes.listAnimes)
router.get('/supernatural', getAnimes.listAnimes)
router.get('/fantasy', getAnimes.listAnimes)
router.get('/gourmet', getAnimes.listAnimes)
router.get('/drama', getAnimes.listAnimes)
router.get('/comedy', getAnimes.listAnimes)
router.get('/mystery', getAnimes.listAnimes)
router.get('/slice-of-life', getAnimes.listAnimes)
router.get('/adventure', getAnimes.listAnimes)
router.get('/romance', getAnimes.listAnimes)
router.get('/sci-fi', getAnimes.listAnimes)

export default router;