import React from "react";
import logo from "../../images/logo.png";
import image from "./Header.css";

const Header = () => {
    return (
        <div>
            <img className="logo" src={logo} alt="" />
            <nav className="navbar">
                <a href="/Home">Home </a>
                <a href="/Shop">Shop </a>
                <a href="/Inventory">Manage Inventory </a>
                <a href="/About">About </a>
            </nav>
        </div>
    );
};

export default Header;
