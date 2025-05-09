import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "../components/layouts/appLayout";
import Home from "../modules/home";
import { ToastContainer } from "react-toastify";


function MainRoute() {
    return (
        <Router>
            <Routes>
                {/* <Route element={<ProtectedRoute />}>
                    <Route path="/" element={<AppLayout />} />
                </Route> */}

                {/* <Route element={<PrivateRoute />}> */}
                <Route >
                    <Route path="/" element={<Home />} />
                </Route>
                {/* </Route> */}
            </Routes>
            <ToastContainer position="top-right" autoClose={3000} />
        </Router>
    );
}

export default MainRoute;