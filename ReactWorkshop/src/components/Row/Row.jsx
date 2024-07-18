import React, { useEffect, useState } from "react";
import Block from "./Block";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux"
import { fetchAnimes } from "../../store/animes.js"
import "./Row.css"

function Row(props) {
    //const fetchedAnimes = useSelector((state) => state.animes.list.data);
    //const animeParse = JSON.parse(fetchedAnimes)
    const [animes, setAnimes] = useState([]);
    /*const [animes, setAnimes] = useState([])
    console.log(useSelector((state) => state.animes.list.data))
    try {
        setAnimes(useSelector((state) => state.animes.list.data))
    } catch (error) {
        console.log(error);
    }*/
    //const dispatch = useDispatch();
    //const animelist = animes;
    /*const getAnimes = {
        async listAnimes(req,res) {
            animeOptions.params.genres = req.query.genre;
            const response = await axios.get(`https://anime-db.p.rapidapi.com/anime`, animeOptions)
            .then(function(response) {
                res.json({data: response.data});
            })
            .catch(error => console.log(error));
        }
            */
    useEffect(()=> { 
        //dispatch(fetchAnimes(props.fetchURL))
        const data = {
        async fetchData(req, res) {
            const response = await axios.get(props.fetchURL)
            .then((res) => {
                res.data.data.data
            }).catch((error) => console.log(error))
        }}
        setAnimes(data.fetchData)
    },[props.fetchURL])
    
    console.log(animes)
    return (
        <div className="section-container">
            <h3 className="genre-container">{props.genre}</h3>
            <div className="row-container">
            
            {animes ?
            animes.map(animes => {
                return(<Block 
                    key = {animes._id}
                    img = {animes.image}
                    title = {animes.title}
                    />)
            })
            :null}
            </div>
        </div>
    )
}

export default Row