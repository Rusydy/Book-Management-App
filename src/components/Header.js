import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <h1>Book Management App</h1>
            <hr />
            <div className="links">
                <NavLink to="/" className="link" activeclassname="active" exact="true">
                    Books List
                </NavLink>
                <NavLink to="/add" className="link" activeclassname="active">
                    Add Book
                </NavLink>
            </div>
        </header>
    )
}

export default Header;