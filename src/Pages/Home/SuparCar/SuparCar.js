import React from 'react';
import Img from '../../../Image/Slider/4.jpg'

const SuparCar = () => {
    return (
      <div className="container mt-5">
        <h1 className="text-center text-info">Supare Car</h1>
        <hr />
        <div className="d-flex">
          <div>
            <p className="m-5 p-4">
              <h1 className="text-center text-info">Supare car Details</h1>
              <hr />
              <p>
                Evaluating the advantages of a warehouse management system is one
                of the many critical aspects of growing businesses. A warehouse
                management system will significantly help the growing companies
                possessing on-hand stocks and inventories.
              </p>
            </p>
          </div>
          <div>
            <img src={Img} className="img-fluid rounded" alt="" />
          </div>
        </div>
      </div>
    );
  };

export default SuparCar;