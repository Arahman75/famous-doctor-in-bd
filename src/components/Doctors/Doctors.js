import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import DoctorCart from '../DoctorCart/DoctorCart';
import "./Doctors.css";


const Doctors = (props) => {
    const [doctors, setDoctors] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./Doctors.JSON')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
     const handleCallDoctor =(doctor) =>{
const newCart = [...cart, doctor];
setCart(newCart)
    }
    return (
        
            <>
                <div className='search-field'>
                <input type="text"  placeholder='Search doctor...'/>
                </div>
                  <div className='cart-container'>
                   
                   <DoctorCart cart={cart}></DoctorCart>
                   </div>

                <div className='doctors-container'>
                {/* <h1>Doctor coming :{doctors.length}</h1> */}
                {
                    doctors.map(doctor => <Doctor
                         key={doctor.id} 
                         handleCallDoctor={handleCallDoctor}
                         doctor={doctor}></Doctor>)
                }
               
                 
                
            </div>
            </>
           
       
    );
    
};

export default Doctors;
