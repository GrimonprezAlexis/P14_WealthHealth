import { Modal } from 'agr-modal-react';
import moment from 'moment';
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import '../css/Home.scss';
import { POST_EMPLOYEE } from "../store/actions/constant";
import Header from './Header';

const Home = () => {
    const [states, setStates] = useState([]);
    const dispatch = useDispatch();

    //Modal
    const [show, setShow] = useState(false);
    const closeModalHandler = () => setShow(false);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();


    const fetchStates = () => {
        fetch('./states.json', {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(function(response){
            return response.json();
        })
        .then(function(myJson) {
            setStates(myJson);
        });
    }

    useEffect(() => {
        fetchStates();
    }, []);

    const onSubmit = async e => {
        const employeeData = {
            firstName: e.firstName,
            lastName: e.lastName,
            dateOfBirth: moment(e.dateOfBirth).format('DD/MM/YYYY'),
            startDate: moment(e.startDate).format('DD/MM/YYYY'),
            department: e.department,
            street: e.street,
            city: e.city,
            state: e.state,
            zipCode: e.zipCode
        };

        dispatch({
            type: POST_EMPLOYEE,
            payload: employeeData
        });
        setShow(true);
    }
    
    const employeeForLocalStorage = useSelector(state => state.data.employees);
    localStorage.setItem('employees', JSON.stringify(employeeForLocalStorage));

    return (
        <>
        <Header/>
        {
            show && <Modal show={show} handleClose={closeModalHandler} title='Statut' body='Employee Created !'/>
        }
        <div className="container container__form">
            <div className="mt-2rem"></div>
            
            <div className="container__form__sub">
                <p>Create Employee</p>

                <div className="mt-1rem"></div>
                
                <form onSubmit={handleSubmit(onSubmit)} id="create-employee">
                    <div className="formLabelInput">
                        <label htmlFor="firstName">First Name *</label>
                        <input type="text" id="firstName" placeholder="First name"
                            {...register("firstName", {
                                required: true
                            })}
                        />
                        {errors.firstName ? errors.firstName.type === "required" && <p className="bgWarning">This field is required</p> : ''}
                    </div>

                    <div className="formLabelInput">
                        <label htmlFor="lastName">Last Name *</label>
                        <input type="text" id="lastName" placeholder="Last name" {...register("lastName", {
                            required: true
                        })}/>
                        {errors.lastName ? errors.lastName.type === "required" && <p className="bgWarning">This field is required</p> : ''}
                    </div>

                    <div className="formLabelInput">
                        <label htmlFor="dateOfBirth">Date of Birth</label>
                        <input id="dateOfBirth" type="date" />
                    </div>

                    <div className="formLabelInput">
                        <label htmlFor="startDate">Start Date</label>
                        <input id="startDate" type="date" />
                    </div>

                    <div className="mt-2rem"></div>                    

                    <fieldset className="address">
                        <legend>Address</legend>

                        <label htmlFor="street">Street</label>
                        <input id="street" type="text" 
                        {...register("street", {
                                required: false
                        })} />

                        <label htmlFor="city">City</label>
                        <input id="city" type="text" 
                        {...register("city", {
                                required: false
                        })}/>

                        <label htmlFor="state">State</label>
                        <select name="state" id="state" {...register("state")}>
                            <option disabled>-- Select state --</option>
                        {
                            states && states.length > 0 && states.map((item) => <option key={item.name}>{item.name}</option>) 

                        }
                        </select>

                        <label htmlFor="zipCode">Zip Code</label>
                        <input id="zipCode" type="number" 
                        {...register("zipCode", {
                                required: false
                        })} />
                    </fieldset>

                    <div className="mt-1rem"></div>

                    <div className="departement">
                        <label htmlFor="department">Department *</label>
                        <select name="department" id="department" {...register("department")}>
                            <option disabled>-- Select option --</option>
                            <option>Sales</option>
                            <option>Marketing</option>
                            <option>Engineering</option>
                            <option>Human Resources</option>
                            <option>Legal</option>
                        </select>
                    </div>

                    <div className="mt-2rem"></div>

                    <div className="flexCenter">
                        <input type="submit" id="btnForm" className="bgSuccess" value="Save"/>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default Home;