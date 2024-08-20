import React from "react";
import Search from "./Search";
import {useNavigate} from "react-router-dom"
import "./Header.css"

function Header() {
    const navigate = useNavigate();
    function handleClick(e) {
        navigate("/" + e);
    }
    return (
        <div className="header-container">
            <h1 className="title"><a className="title" href="/">Anime Lister</a></h1>
            <Search/>
            <div className="login-signup-container">
                <button onClick={(e)=> handleClick(e.target.id)} className="login-signup" id="login">Login</button>
                <button onClick={(e)=> handleClick(e.target.id)} className="login-signup" id="signup">Sign Up</button>
            </div>
        </div>
    )
}

export default Header;