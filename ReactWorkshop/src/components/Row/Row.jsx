import React from "react";
import Block from "./Block";
import "./Row.css"

function Row() {
    async function logAnimes() {
        fetch('https://myanimelist.p.rapidapi.com/anime/top/all', {
            param: {
                limit: '10'
            },    
            headers: {
                    'x-rapidapi-key': '80e8cae6e6mshb20aa21a8f7babbp1602c6jsna179ded48bab',
                    'x-rapidapi-host': 'myanimelist.p.rapidapi.com'
                }
            })
                .then(response => response.json).then(data => console.log(data.results))
    }

    logAnimes();
    return (
        <div className="section-container">
            <h3 className="genre-container">Genre Ig</h3>
            <div className="row-container">
                <Block></Block>
            </div>
        </div>
    )
}

export default Row