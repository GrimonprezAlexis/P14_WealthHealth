import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import '../css/Home.scss';
import { POST_EMPLOYEE } from "../store/actions/constant";
import Header from './Header';



const Home = () => {
    const [states, setStates] = useState([]);
    const [step, setStep] = useState(1);
    const history = useHistory();
    const dispatch = useDispatch();
    
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

    const changeStep = (step) => {
        setStep(step);
    }

    const onSubmit = async e => {
        const employeeData = {
            firstName: e.firstName,
            lastName: e.lastName,
            dateOfBirth: e.dateOfBirth,
            startDate: e.startDate,
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

        setStep(3);
        history.push('/employee-list');
    }
    
    const employeeForLocalStorage = useSelector(state => state.data.employees);
    localStorage.setItem('employees', JSON.stringify(employeeForLocalStorage));

    return (
        <>
        <Header/>

        <div className="container container__form">
            <div className="mt-2rem"></div>
            
            <div className="container__form__sub">
                <p>Create Employee</p>

                <div className="step">
                    <i>Step {step} / 3</i>
                </div>
                <span className="breadcrumb"></span>


                <div className="mt-1rem"></div>
                <form onSubmit={handleSubmit(onSubmit)} id="create-employee">
                    {
                        step && step === 1 && 
                        <>
                        <div className="formLabelInput">
                            <label htmlFor="firstName">First Name *</label>
                            <input type="text" id="firstName" placeholder="First name"
                                {...register("firstName", {
                                    required: true
                                })}
                            />
                            {errors.firstNam ? errors.firstNam.type === "required" && <p className="bgWarning">This field is required</p> : ''}
                        </div>
    
                        <div className="formLabelInput">
                            <label htmlFor="lastName">Last Name *</label>
                            <input type="text" id="lastName" placeholder="Last name"
                                {...register("lastName", {
                                    required: true
                                })}
                            />
                            {errors.lastName ? errors.lastName.type === "required" && <p>This field is required</p> : ''}
                        </div>
    
                        <div className="formLabelInput">
                            <label htmlFor="dateOfBirth">Date of Birth</label>
                            <input id="dateOfBirth" type="date" 
                                {...register("dateOfBirth", {
                                    valueAsDate: true
                                })}
                            />
                            {errors.password ? errors.password.type === "required" && <p>This field is required</p> : ''}
                        </div>
    
                        <div className="formLabelInput">
                            <label htmlFor="startDate">Start Date</label>
                            <input id="startDate" type="date" 
                                {...register("startDate", {
                                    valueAsDate: true
                                })}
                            />
                            {errors.startDate ? errors.startDate.type === "required" && <p>This field is required</p> : ''}
                        </div>
    
                        <div className="mt-2rem"></div>
                        <input type="submit" onClick={() => changeStep(step + 1)} id="btnForm" value="Next"/>
                        </>
                    }

                    {
                        step && step === 2 && 
                        <>
                        <fieldset className="address">
                            <legend>Address</legend>

                            <label htmlFor="street">Street</label>
                            <input id="street" type="text" />

                            <label htmlFor="city">City</label>
                            <input id="city" type="text" />

                            <label htmlFor="state">State</label>
                            <select name="state" id="state">
                                <option disabled>-- Select state --</option>
                            {
                                states && states.length > 0 && states.map((item) => <option key={item.name}>{item.name}</option>) 

                            }
                            </select>

                            <label htmlFor="zip-code">Zip Code</label>
                            <input id="zip-code" type="number" />
                        </fieldset>

                        <div className="mt-1rem"></div>

                        <div className="departement">
                            <label htmlFor="department">Department</label>
                            <select name="department" id="department">
                                <option disabled>-- Select option --</option>
                                <option>Sales</option>
                                <option>Marketing</option>
                                <option>Engineering</option>
                                <option>Human Resources</option>
                                <option>Legal</option>
                            </select>
                        </div>

                        
                        <div className="mt-2rem"></div>

                        <div className="flexBetween">
                            <input type="submit" onClick={() => changeStep(step - 1)} id="btnForm" className="bgDanger" value="Previous"/>
                            <input type="submit" id="btnForm" className="bgSuccess" value="Envoyer"/>
                        </div>
                        </>
                    }

                    {
                        step && step === 3 && 
                        <>
                        <div id="confirmation" className="modal">Employee Created!</div>
                        </>
                    }


                </form>
            </div>
        </div>

        
        </>
    )
}

export default Home;