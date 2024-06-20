import React from "react";
import "./Block.css"

function Block() {
    function someFunction() {
        console.log("tess is a fart monkey");
    }

    return (
        <div className = "block-container">
            <img src="https://picsum.photos/200/300" alt="" className="block-img"/>
            <h1 className="block-title">Title</h1>
            <p className="block-description">description</p>
            <button onClick={someFunction} className="block-btn">More Info</button>
        </div>
    )
}
export default Block;