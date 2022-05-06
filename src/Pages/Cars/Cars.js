import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';

const Cars = () => {
    const [cars,setCars] =useState([]);
    useEffect( () =>{
        fetch('http://localhost:5000/cars')
        .then(res =>res.json())
        .then(data =>setCars(data))
    },[])
    return (
        <div>
            <h2>Cars</h2>
        <div className=' row w-100'>
            {
                cars.map(car => <Car key={car._id} car={car}></Car>)
            }
        </div>
        
        </div>
    );
};

export default Cars;