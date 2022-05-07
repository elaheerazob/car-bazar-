import { useEffect, useState } from 'react';

const useCarDetails = (carId) => {
    const [car,setCar] =useState({});
    useEffect( () =>{
        const url = `http://localhost:5000/cars/${carId}`;
        console.log(url);
        fetch(url)
        .then(res =>res.json())
        .then(data =>setCar(data))
    } ,[carId]);
    return [car]
};

export default useCarDetails;