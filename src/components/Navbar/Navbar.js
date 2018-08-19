import React from "react";
import "./Navbar.css";

const Navbar = props => 
    // <nav className="navbar">
    //     {/* <ul> */}
    //         <div className="brand nav">
    //             <a href="/">Clicky Game</a>
    //         </div>
    //         <div className="nav">
    //             {props.response}
    //         </div>
    //         <div className="nav">
    //             Score: {props.currentScore} | Top Score: {props.topScore}
    //         </div>
    //     {/* </ul> */}
    // </nav>
    <ul className="nav nav-tabs text-center my-auto">
        <li className="col-3"><a href="/">Clicky Game</a></li>
        <li className="col-6">{props.response}</li>
        <li className="col-3">Score: {props.currentScore} | Top Score: {props.topScore}</li>
    </ul>
;

export default Navbar;