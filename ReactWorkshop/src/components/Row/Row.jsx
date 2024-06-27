import React from "react";
import Block from "./Block";
import "./Row.css"

function Row() {
    /*async function logAnimes() {
        const url = 'https://myanimelist.p.rapidapi.com/anime/top/all';
        const options = {
            method: 'GET',
            param: {
                'n': 10
            },
            headers: {
                'x-rapidapi-key': '80e8cae6e6mshb20aa21a8f7babbp1602c6jsna179ded48bab',
                'x-rapidapi-host': 'myanimelist.p.rapidapi.com'
            }
        };

            fetch(url, options)
                .then(res => res.json())
                .then(json => 
                    {
                        json.forEach(element => {
                            const block = React.createElement("Block", json[element]);
                        });
                    })
                .catch(err => console.error('error:' + err));
    }

    logAnimes();
    */

    

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