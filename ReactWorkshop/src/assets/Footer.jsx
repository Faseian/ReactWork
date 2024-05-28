import React from "react";

function Footer() {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <h2>
            {year}
        </h2>
    );
}

export default Footer;