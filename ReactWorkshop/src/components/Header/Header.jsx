import React from "react";
import Search from "./Search";


import "./Header.css"

function Header() {
    function handleClick(e) {
        
    }
    return (
        <div className="header-container">
            <h1 className="title">Anime Lister</h1>
            <Search/>
            <div className="login-signup-container">
                <button formAction="/login-screen" className="login-signup" id="login-button">Login</button>
                <button onClick={(e)=> handleClick(e.target.id)} className="login-signup" id="signup-button">Sign Up</button>
            </div>
        </div>
    )
}

export default Header;