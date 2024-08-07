import React from "react";
import "./Header.css"

function Header() {
    return (
        <div className="header-container">
            <h1 className="title">Anime Lister</h1>
            <div className = 'search-box'>
                <input type='text' placeholder="Search..." className="search-bar" id="search-bar"/>
            </div>
        </div>
    )
}

export default Header;