import React from "react";
import {Route, Routes} from "react-router";
import Home from "../screens/Home";
import Project from "../screens/Project";

const Router: React.FC = () => {

    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/project" element={<Project/>}/>
        </Routes>
    );
}

export default Router;