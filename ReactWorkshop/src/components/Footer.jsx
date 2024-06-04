import React from "react";

function Footer() {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <div className="footer-container">
            <h2>{year}</h2>
        </div>
    );
}

export default Footer;