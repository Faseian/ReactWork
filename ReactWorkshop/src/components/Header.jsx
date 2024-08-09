import React, {useState, useEffect} from "react";
import axios from "axios";
import SearchResults from "./SearchResults";
import searchIcon from "../assets/search-icon.svg"

import "./Header.css"

function Header() {
    const [input, setInput] = useState("")
    const [results, setResults] = useState([])
    useEffect(() => {
        if (input !== "") {
            axios.get(`http://localhost:3000/api/animes/animesearch?input=${input}`)
            .then((response) => setResults(response.data.data.data))
        } else {
            setResults([]);
        }
    }, [input])

    const changeHandler = (value) => {
        setInput(value);
    }
    return (
        <div className="header-container">
            <h1 className="title">Anime Lister</h1>
            <div className="search">
                <div className = 'search-box'>
                    <img src={searchIcon} alt="search-icon" />
                    <input type='text' placeholder="Search..." className="search-bar" onChange={(e) => changeHandler(e.target.value)}/>
                </div>
                <SearchResults results = {results}/>
            </div>
            <a href="">Login</a>
            <a href="">Signup</a>
        </div>
    )
}

export default Header;