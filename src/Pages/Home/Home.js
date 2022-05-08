import React from 'react';
import Cars from '../Cars/Cars';
import Banner from './Banner/Banner';
import Factory from './Factory/Factory';
import SuparCar from './SuparCar/SuparCar';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Cars></Cars>
            <SuparCar></SuparCar>
            <Factory/>
        </div>
    );
};

export default Home;