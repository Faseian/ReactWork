import React from "react";
import "./Header.css"

function Header() {
    return (
        <div className="header-container">
            <h1 className="title">Anime Lister</h1>
            <form action="">
                <input type="text" value="Search..." className="search-bar" id="search-bar"/>
                <button></button>
            </form>
        </div>
    )
}

export default Header;