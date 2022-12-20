import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../images/logo.png";
import image from "./Header.css";

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    };
    return (
        <div>
            <img className="logo" src={logo} alt="" />
            <nav className="navbar">
                <Link to="/Home">Home </Link>
                <Link to="/Shop">Shop </Link>
                <Link to="/Orders">Orders </Link>
                <Link to="/Inventory">Manage Inventory </Link>
                {user ? <button onClick={handleSignOut}>Sign Out</button> : <Link to="/Login">Login </Link>}
            </nav>
        </div>
    );
};

export default Header;
