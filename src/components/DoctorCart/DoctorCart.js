import React from 'react';

const DoctorCart = (props) => {
    const {cart} = props;
    console.log(props.cart)
    let total = 0;
    for(const product of cart)
    total = total + product.salary;
    return (
        <div>
            <h2>Total Doctor:{props.cart.length}</h2>
            <br />
            <h3>Salary:{total} </h3>
        </div>
    );
};

export default DoctorCart;