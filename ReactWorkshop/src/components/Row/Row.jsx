import React from "react";
import Block from "./Block";
import "./Row.css"

function Row() {
    async function logAnimes() {
        const url = 'https://api.themoviedb.org/3/account/null/lists?page=1';
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: ''
            }
        };

            fetch(url, options)
                .then(res => res.json())
                .then(json => console.log(json))
                .catch(err => console.error('error:' + err));
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