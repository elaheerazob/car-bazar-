import { useEffect, useState } from 'react';

const useCarDetails = () => {
    const [car,setCar] =useState([]);
    useEffect( () =>{
        const url = `http://localhost:5000/cars`;
        console.log(url);
        fetch(url)
        .then(res =>res.json())
        .then(data =>setCar(data))
    } ,[]);
    return [car,setCar];
};

export default useCarDetails;