import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import { Route, Routes } from "react-router-dom";
import Inventory from "./components/Inventory/Inventory";
import Orders from "./components/Orders/Orders";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import RequireAuth from "./components/RequireAuth/RequireAuth";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Shop />} />
                <Route path="/home" element={<Shop />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/orders" element={<Orders />} />
                <Route
                    path="/inventory"
                    element={
                        <RequireAuth>
                            <Inventory />
                        </RequireAuth>
                    }
                />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </div>
    );
}

export default App;
