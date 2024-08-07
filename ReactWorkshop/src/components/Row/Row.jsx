import React, { useEffect, useState } from "react";
import Block from "./Block";
import axios from "axios";
import "./Row.css"

function Row(props) {
    const [animes, setAnimes] = useState([]);

    useEffect(()=> {   
        axios.get(props.fetchURL)
        .then((response) => setAnimes(response.data.data.data))
        .catch((error) => console.log(error));   
    },[props.fetchURL])
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