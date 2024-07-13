import React, { useState, useEffect } from "react";
import Block from "./Block";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux"
import { fetchAnimes, addAnimeGenre } from "../../store/animes"
import "./Row.css"

function Row(props) {
    const [animes, setAnimes] = useState([]);
    
    useEffect(()=> {
        async function fetchData() {
            const request = await axios.get(props.genre ,props.fetchURL)
            setAnimes(request.data);
            return request;
        }
        fetchData();
    },[])
    console.log(animes)
    return (
        <div className="section-container">
            <h3 className="genre-container">{props.genre}</h3>
            <div className="row-container">
            
            { animes ?
            animes.map(animes => {
                return(<Block 
                    key = {animes._id}
                    img = {animes.image}
                    title = {animes.title}
                    />)
            })
            :null }
            </div>
        </div>
    )
}

export default Row