import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    const [error, setError] = useState("");
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    };
    const handlePasswordBlur = (event) => {
        setPassword(event.target.value);
    };
    const handleConfirmPassBlur = (event) => {
        setConfirmpassword(event.target.value);
    };
    const navigate = useNavigate();
    if (user) {
        navigate("/shop");
    }
    const handleCreateUser = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(email, password);
        if (password !== confirmpassword) {
            setError("Your password did not match");
            return;
        }
        if (password.length <= 6) {
            setError("Password must be at least 6 character");
            return;
        }
    };
    return (
        <div className="form-container">
            <div>
                <h2 className="form-title">Sign Up</h2>
                <form onSubmit={handleCreateUser} action="">
                    <div className="input-group">
                        <label htmlFor="email">Email</label>

                        <input type="email" name="email" onBlur={handleEmailBlur} required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" onBlur={handlePasswordBlur} name="" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Confirm Password</label>
                        <input onBlur={handleConfirmPassBlur} type="password" name="" id="" required />
                    </div>
                    <p>{error}</p>
                    <input className="submit-btn" type="submit" value="Sign Up" />
                </form>
                <p>
                    Create an account{" "}
                    <Link className="create-account" to="/login">
                        LogIn
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;
