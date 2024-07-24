import React from "react";
import "./Header.css"

function Header() {
    return (
        <div className="header-container">
            <h1 className="title">Anime Lister</h1>
            <form action="" className="form-container">
                <input type="text" value="Search..." className="search-bar" id="search-bar"/>
                <button>Search</button>
            </form>
        </div>
    )
}

export default Header;