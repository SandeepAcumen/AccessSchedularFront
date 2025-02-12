import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "../components/layouts/appLayout";
import Home from "../modules/home";


function MainRoute() {
    return (
        <Router>
            <Routes>
                {/* <Route element={<ProtectedRoute />}>
                    <Route path="/" element={<AppLayout />} />
                </Route> */}

                {/* <Route element={<PrivateRoute />}> */}
                <Route element={<AppLayout />}>
                    <Route path="/" element={<Home />} />
                </Route>
                {/* </Route> */}
            </Routes>
        </Router>
    );
}

export default MainRoute;