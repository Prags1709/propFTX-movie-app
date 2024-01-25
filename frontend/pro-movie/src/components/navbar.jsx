import React from "react";
import {NavLink} from 'react-router-dom';

let obj = [
    {path:"/",title:"Movies"},
    {path:"/signup",title:"Signup"},
    {path:"/login",title:"Login"}
]

const styfun=({isActive})=>{
    return isActive?
    {textDecoration:'none',color:"orange"}
    :{textDecoration:'none',color:"lightblue"}
}

const Navbar = ()=>{
    return (
        <div className="nav"> 
            <div>
                <h2><span>pro</span>MOVIE</h2> 
            </div> 
            <div className="navbar-titles">
                {obj.map((ele, i)=>{
                    return (
                        <NavLink style={styfun} to={ele.path} key={i+ele.path}>{ele.title}</NavLink>
                    )
                })}
            </div> 
            
        </div>
    )
}

export default Navbar;