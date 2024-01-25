import React from "react";
import {Routes, Route} from 'react-router-dom'
import MoviesBox from "../page/movies";
import Siginup from "../page/signup";
import Login from "../page/login";


const Mainroute = ()=>{
    return (
        <Routes>
            <Route path="/" element={<MoviesBox />} />
            <Route path="/signup" element={<Siginup />} />
            <Route path="/login" element={<Login />}/>
        </Routes>
    )
}

export default Mainroute;