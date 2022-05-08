import { useEffect, useState } from 'react';

const useCarDetails = () => {
    const [car,setCar] =useState([]);
    useEffect( () =>{
        const url = `https://pure-eyrie-56376.herokuapp.com/cars`;
        console.log(url);
        fetch(url)
        .then(res =>res.json())
        .then(data =>setCar(data))
    } ,[]);
    return [car,setCar];
};

export default useCarDetails;