import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../css/Home.scss';
import Header from './Header';
import Table from './Table';

const EmployeeList = () => {
    return (
        <>
        <Header/>
        <div className="mt-2rem"></div>
        <header className="container">
            <h1>Current Employees</h1>
            <div className="mt-2rem"></div>
        </header>

        <div className="mt-1rem"></div>

        <div id="employee-div" className="container">
            <Table/>
        </div>

        <Link to='/' className="container">Home</Link>
        </>
    )
}

export default EmployeeList;