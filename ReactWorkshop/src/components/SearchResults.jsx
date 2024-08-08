import React from "react";
import "./SearchResults.css"
function SearchResults ({results}) {
    return (
        <div className="search-results-box">
            {results ? 
            results.map(results => {
                return (
                    <div className="get-results-container">
                        <img src={results.image} alt={results.title + " image"} className="results-image"/>
                        <div className="search-results" key={results._id}>
                            {results.title}
                        </div>
                    </div>
                )
            }) : null}
        </div>
    )
}

export default SearchResults;