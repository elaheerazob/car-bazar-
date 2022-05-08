import React from 'react';
import useCarDetails from '../../Hooks/useCarDetails';
import ManageProduct from '../ManageProduct/ManageProduct';

const ManageItem = () => {
    const [car, setCar] = useCarDetails();
  
  return (
    <div className="container-fluid my-5">
      <h1 className="text-center">Welcome to manageiteam</h1>
      <hr />
      <div className="container">
          {
              car.map(carAll => <ManageProduct key={carAll._id} carAll={carAll}></ManageProduct>)
          }
      </div>
    </div>
  );
};

export default ManageItem;