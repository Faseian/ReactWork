import React from "react";
import "./Header.css"

function Header() {
    return (
        <div className="header-container">
            <h1 className="title">Anime Lister</h1>
            <div className = 'spaceBetweenDiv'></div>
            <input type='text' placeholder="Search..." className="search-bar" id="search-bar"/>
        </div>
    )
}

export default Header;