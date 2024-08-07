import React, {useState, useEffect} from "react";
import axios from "axios";
import searchIcon from "../assets/search-icon.svg"

import "./Header.css"

function Header() {
    const [input, setInput] = useState("")
    const [results, setResults] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:3000/api/animes/animesearch?input=${input}`)
        .then((response) => setResults(response.data.data.data))
    }, [input])

    /*const fetchData = (value) => {
        try {
            fetch(`http://localhost:3000/api/animes/animesearch?input=${value}`).then((response) => {response.json()}).then((json) => {
                setResults(json);
                console.log(results);
            })
        } catch (error) {
            console.log(error);
        }
       axios.get(`http://localhost:3000/api/animes/animesearch?input=${value}`)
       .then((response) => {
        return response.data.data.data;
    })
       .catch((error) => console.log(error))
    }*/
    const changeHandler = (value) => {
        setInput(value);
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