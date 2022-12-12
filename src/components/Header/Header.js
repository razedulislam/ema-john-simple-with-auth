import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import image from "./Header.css";

const Header = () => {
    return (
        <div>
            <img className="logo" src={logo} alt="" />
            <nav className="navbar">
                <Link to="/Home">Home </Link>
                <Link to="/Shop">Shop </Link>
                <Link to="/Orders">Orders </Link>
                <Link to="/Inventory">Manage Inventory </Link>
                <Link to="/About">About </Link>
            </nav>
        </div>
    );
};

export default Header;
