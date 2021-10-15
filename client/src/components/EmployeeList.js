import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import '../css/Home.scss';
import Header from './Header';
import { Modal } from 'agr-modal-react';
import Table from './Table';
import { FILTER_EMPLOYEE } from '../store/actions/constant';

const EmployeeList = () => {
    const history = useHistory();
    const location = useLocation();
    const [show, setShow] = useState(location.state?.params);
    const closeModalHandler = () => setShow(false);

    const dispatch = useDispatch();
    const employees = useSelector(state => state.data.employees) || localStorage.getItem('employees');

    const [searchKey, setSearchKey] = useState('');

    const filterEmployee = () => {
        return employees.filter(obj => Object.keys(obj).some(key => obj[key].includes(searchKey)));
    }

    const handleSearch = (event) => {
        setSearchKey(event.target.value);  

        dispatch({
            type: FILTER_EMPLOYEE,
            payload: filterEmployee()
        });
        
    };

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

        <div className="mt-2rem"></div>
        <header className="container">
            <h1>Current Employees</h1>
            <div className="mt-2rem"></div>
        </header>

        <div className="flexAround">
            <div>
                <label htmlFor="entries">Show</label>
                <select name="entries" id="entries" className="entriesFilter">
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
                entries
            </div>

            <div>
                <label htmlFor="searchInput">Search:</label>
                <input type="search" name="searchInput" className="searchInput" onChange={handleSearch}/>  
            </div>
        </div>

        <div className="mt-1rem"></div>

        <div id="employee-div" className="container">
            <Table/>
        </div>


        <Link to='/' className="container">Home</Link>
        </>
    )
}

export default EmployeeList;