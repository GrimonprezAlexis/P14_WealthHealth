import React from "react";
import { useSelector } from "react-redux";

const Table = () => {
    const employees = useSelector(state => state.data.employees) || localStorage.getItem('employees');

    return (
        <table className="table table__responsive">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Start Date</th>
                    <th>Departement</th>
                    <th>Date of Birth</th>
                    <th>Street</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Zip Code</th>
                </tr>    
            </thead>


            {employees.length === 0 && <span>No data available in table</span>}
            {employees.length > 0 && employees.map((employee, idx) => (
            <tbody key={idx} >
                <tr>
                    <td> {employee.firstName ||'-'}</td> 
                    <td> {employee.lastName ||'-'}</td> 
                    <td> {employee.startDate}</td>
                    <td> {employee.department ||'-'}</td> 
                    <td> {employee.dateOfBirth}</td> 
                    <td> {employee.street ||'-'}</td> 
                    <td> {employee.city ||'-'}</td> 
                    <td> {employee.state ||'-'}</td> 
                    <td> {employee.zipCode ||'-'}</td> 
                </tr>
            </tbody>
            ))}
        </table>
    );
}

export default Table;