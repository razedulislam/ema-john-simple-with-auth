import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
//requireauth = jodi login kora thake taile private route a ukhte dibo otherwise dukhte dibo na

const RequireAuth = ({ children }) => {
    const [user] = useAuthState(auth);
    const location = useLocation();
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
    }
    return children;
};

export default RequireAuth;
