import { useState, useEffect} from 'react'
import axios from "axios";
import SearchResults from "./SearchResults";
import searchIcon from "../assets/search-icon.svg"

function Search() {
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
        if (value != input) {
            setInput(value);
        }
    }

    return (
        <div className="search">
                <div className = 'search-box'>
                    <img src={searchIcon} alt="search-icon" />
                    <input type='text' placeholder="Search..." className="search-bar" onChange={(e) => changeHandler(e.target.value)}/>
                </div>
                <SearchResults key = {input} results = {results}/>
        </div>
    )
}
export default Search;