import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import '../css/Home.scss';
import Header from './Header';
import { Modal } from 'agr-modal-react';

const EmployeeList = () => {
    const history = useHistory();
    const location = useLocation();
    const [show, setShow] = useState(location.state.params);
    const closeModalHandler = () => setShow(false);

    const employees = useSelector(state => state.data.employees) || localStorage.getItem('employees');
    if(employees && employees.length === 0) history.push('/');
    return (
        <>
        <Header/>

        {
            show && 
            <>
            <div>
                { show ? <div onClick={closeModalHandler} className="back-drop"></div> : null }
                <Modal show={show} close={closeModalHandler} title='Statut' body='Employee Created !'/>
            </div>                        
            </>
        }


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