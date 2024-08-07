import React from "react";
import "./SearchResults.css"
function SearchResults ({results}) {
    return (
        <div className="search-results-box">
            {results ? 
            results.map(results => {
                return (
                    <div key={results._id}>
                        {results.alternativeTitles[0]}
                    </div>
                )
            }) : null}
        </div>
    )
}

export default SearchResults;