import React, { useEffect } from "react";
import Block from "./Block";
import { useSelector, useDispatch } from "react-redux"
import { fetchAnimes } from "../../store/animes"
import "./Row.css"

function Row(props) {
    /*
    const animes = useSelector((state) => state.animes.list.data.data);
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(fetchAnimes());
    },[])
*/
    return (
        <div className="section-container">
            <h3 className="genre-container" id = {props.key}>{props.genre}</h3>
            <div className="row-container">
        
         { animes ?
            animes.map(animes => {
                return(<Block 
                    key = {animes.id}
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