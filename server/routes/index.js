import express from 'express'
import animesRoute from './animes.route.js'
const router = express.Router();

const routesIndex = [
    {
        path:'/animes',
        route:animesRoute,
    },
]

routesIndex.forEach((route)=>{
    router.use(route.path,route.route);
})

export default router;