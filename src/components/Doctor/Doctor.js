import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faStethoscope } from '@fortawesome/free-solid-svg-icons';
import './Doctor.css';


const Doctor = (props) => {
    // console.log(props)
    const {name , img, speciality, salary, gender} = props.doctor;

    return (
        <div className='doctor-container'>
            <h1>Name: {name}</h1>
            <img style={{width:'200px', height:"200px"}} src = {img} alt="" />
            <p>Specialist: {speciality}</p>
            <h3>Salary: {salary}</h3>
            <h4>Gender: {gender}</h4>
            <button 
            onClick={()=>props.handleCallDoctor(props.doctor)}
            className='call-btn'> <FontAwesomeIcon icon={faStethoscope} /> Call Doctor</button>
        </div>
    );
};

export default Doctor;