import React from "react";
import "../Navbar/navbar.css";
import { Link, NavLink } from "react-router-dom";
function Navbar({isLoggedIn, username, onLogout}) {


    return (
        <div className="navbar-container">
            <div className="profile-dropdown">
                {isLoggedIn ? (
                    <>
                        <span className="fs-4">Welcome {username}</span>
                        <button className="btn btn-sm btn-secondary mx-2 fs-5" onClick={onLogout}>Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/login" className="animated-link">
                            Login
                        </Link>
                        <Link to="/register" className="animated-link">
                            &nbsp; Register
                        </Link>
                    </>
                )}
            </div>
            <div className="text-container">
                <h1 className="text">Welcome to M.Y.C Software</h1>
            </div>
            <div className="logo">
                <Link to="/">M.Y.C Software</Link>
            </div>
            <nav className="navbar">
                <ul className="nav-links">
                    <li>
                        <NavLink
                            exact
                            to="/virus"
                            activeClassName="active-link"
                            className="nav-link"
                        >
                            Anti-Virus
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            exact
                            to="/multimedia"
                            activeClassName="active-link"
                            className="nav-link"
                        >
                            Multimedia
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            exact
                            to="/operating-system"
                            activeClassName="active-link"
                            className="nav-link"
                        >
                            Operating System
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            exact
                            to="/tutorial"
                            activeClassName="active-link"
                            className="nav-link"
                        >
                            Tutorials
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
