import React, { Component } from 'react';

//functional stateless component

const NavBar = ({totalCounters}) =>{
    console.log("NavBar-Rendered");
    return(
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Navbar {" "}
                <span className="badge badge-pill badge-secondary">
                    {totalCounters}
                </span>
            </a>
        </nav>
    );

};

export default NavBar;