import React from "react";
import Search from "./Search";


import "./Header.css"

function Header() {
    
    return (
        <div className="header-container">
            <h1 className="title">Anime Lister</h1>
            <Search/>
            <button>Login</button>
            <button>Sign Up</button>
        </div>
    )
}

export default Header;