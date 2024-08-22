import express from 'express'
import animesRoute from './animes.route.js'
import authRoute from './auth.route.js'
const router = express.Router();
//Routes index
const routesIndex = [
    {
        path:'/animes',
        route:animesRoute,
    },
    {
        path:'/auth',
        route:authRoute
    }
]
routesIndex.forEach((route)=>{
    router.use(route.path,route.route);
})

export default router;