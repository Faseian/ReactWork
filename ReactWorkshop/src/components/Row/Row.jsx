import React, { useEffect, useState } from "react";
import Block from "./Block";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux"
import { fetchAnimes } from "../../store/animes.js"
import "./Row.css"

function Row(props) {
    const [animes, setAnimes] = useState([]);

    useEffect(()=> {   
        async function fetchData() {
            const response = await axios.get(props.fetchURL);
            setAnimes(response.data.data.data);
            return response;
        }
        fetchData();
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