import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';

const Cars = () => {
    const [cars,setCars] =useState([]);
    useEffect( () =>{
        fetch('my.json')
        .then(res =>res.json())
        .then(data =>setCars(data))
    },[])
    return (
        <div>
            <h2>Cars</h2>
        <div className=' row w-100'>
            {
                cars.map(car => <Car key={car.id} car={car}></Car>)
            }
        </div>
        
        </div>
    );
};

export default Cars;