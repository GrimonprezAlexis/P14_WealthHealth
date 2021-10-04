import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
        <header className="header">
            <div className="title">
                <Link to='/'>  HRNet </Link>
            </div>
            <Link to='/employee-list'>
                View Current Employees
            </Link>
        </header>
        </>
    )
}

export default Header;