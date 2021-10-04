import React from 'react';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import '../css/Home.scss';
import Header from './Header';

const EmployeeList = () => {
    const history = useHistory();

    const employees = useSelector(state => state.data.employees) || localStorage.getItem('employees');
    if(employees && employees.length === 0) history.push('/');

    return (
        <>
        <Header/>

        <div id="employee-div" className="container">
            <h1>Current Employees</h1>
            <table id="employee-table" className="display"></table>
            <Link to='/'>Home</Link>
            {
                employees.map((employee) => <span>{employee.firstName}</span>) 
            }
        </div>
        </>
    )
}

export default EmployeeList;