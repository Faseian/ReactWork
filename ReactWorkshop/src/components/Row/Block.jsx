import React from "react";
import "./Block.css"

function Block(props) {
    function someFunction() {
        console.log("tess is a fart monkey");
    }

    return (
        <div className = "block-container" key={props.myanimelist_id}>
            <img src="https://picsum.photos/200/300" alt="" className="block-img"/>
            <h1 className="block-title">{props.title}</h1>
            <p className="block-score">Score: {props.score} Rank: {props.rank}</p>
            <button onClick={someFunction} className="block-btn">More Info</button>
        </div>
    )
}
export default Block;