import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    };
    const handlePasswordBlur = (event) => {
        setPassword(event.target.value);
    };
    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }

    const handleSignIn = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    };

    return (
        <div className="form-container">
            <div>
                <h2 className="form-title">Login</h2>
                <form onSubmit={handleSignIn} action="">
                    <div className="input-group">
                        <label htmlFor="email">Email</label>

                        <input type="email" onBlur={handleEmailBlur} name="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="" id="" required />
                        <p className="errorMessage">{error?.message}</p>
                        {loading && <p>Loading...</p>}
                    </div>
                    <input className="submit-btn" type="submit" value="Login" />
                </form>
                <p>
                    New to ema john{" "}
                    <Link className="create-account" to="/signup">
                        Create an Account
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
