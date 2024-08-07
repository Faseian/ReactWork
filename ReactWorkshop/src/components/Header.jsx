import React, {useState} from "react";
import axios from "axios";
import searchIcon from "../assets/search-icon.svg"

import "./Header.css"

function Header() {
    const [results, setResults] = useState([])

    const fetchData = (value) => {
        /*
        try {
            fetch(`http://localhost:3000/api/animes/animesearch?input=${value}`).then((response) => {response.json()}).then((json) => {
                setResults(json);
                console.log(results);
            })
        } catch (error) {
            console.log(error);
        }
        */
       axios.get(`http://localhost:3000/api/animes/animesearch?input=${value}`)
       .then((response) => {
        console.log(response.data.data.data)
        return response.data.data.data;
    })
       .catch((error) => console.log(error))
    }
    const changeHandler = (value) => {
        setResults(fetchData(value));
        console.log(results)
    }
    return (
        <div className="header-container">
            <h1 className="title">Anime Lister</h1>
            <div className = 'search-box'>
                <img src={searchIcon} alt="search-icon" />
                <input type='text' placeholder="Search..." className="search-bar" onChange={(e) => changeHandler(e.target.value)}/>
            </div>
        </div>
    )
}

export default Header;