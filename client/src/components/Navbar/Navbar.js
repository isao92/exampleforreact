import React, { Component } from "react";
import { Link } from 'react-router-dom';
import '../Navbar/Navbar.css';

class Navbar extends Component {
    constructor() {
        super();
    }

    showNavigation = () => {
            
            return (
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/signup">Signup</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/ProjectsPage">Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                </ul>
            );
        
    };

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg">
                <div className="container">
                    <Link className="navbar-brand" to="/">Agustin Chavez's Portfolio</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mr-auto">
                        </ul>
                        {this.showNavigation()}
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;





