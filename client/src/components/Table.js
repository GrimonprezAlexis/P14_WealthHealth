import { MDBDataTableV5 } from 'mdbreact';
import React from "react";
import { useSelector } from "react-redux";

import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import { Link } from 'react-router-dom';


const Table = () => {
    const employees = useSelector(state => state.data.employees) || localStorage.getItem('employees');
    const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: 'First Name',
        field: 'firstName',
        width: 150,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'firstName',
        },
      },
      {
        label: 'Last Name',
        field: 'lastName',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'Date Of Birth',
        field: 'dateOfBirth',
        sort: 'disabled',
        width: 150,
      },
      {
        label: 'Start date',
        field: 'startDate',
        sort: 'disabled',
        width: 150,
      },
      {
        label: 'Street',
        field: 'street',
        sort: 'disabled',
        width: 50,
      },
      {
        label: 'City',
        field: 'city',
        sort: 'disabled',
        width: 100,
      },
      {
        label: 'State',
        field: 'state',
        sort: 'disabled',
        width: 100,
      },
      {
        label: 'Zip Code',
        field: 'zipCode',
        sort: 'disabled',
        width: 100,
      },
      {
        label: 'Department',
        field: 'department',
        width: 100,
      }
    ],
    rows: employees,
    });
    
  return (
    <>
    {employees.length === 0 && <span>No data available in table</span>}
    <Link to='/exemple'>Page avec données d'exemple</Link>
    <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} />;
    </>
  );
}

export default Table;