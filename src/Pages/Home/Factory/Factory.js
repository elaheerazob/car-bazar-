import React from 'react';
import Img from '../../../Image/Slider/factory.jpg'

const Factory = () =>{
    return (
      <div className="container mt-5" >
        <h1 className="text-center text-info">Our Factory </h1>
        <hr />
        <div className="d-flex ">
          <div>
            <img src={Img} className="img-fluid rounded" alt="" />
          </div>
          <div>
            <p className="m-5 p-4">
              <h1 className="text-center text-info">Factory Details</h1>
              <hr />
              <p>
              Prices do not include additional fees and costs of closing, including government fees and taxes, any finance charges, any dealer documentation fees, any emissions testing fees or other fees. All prices, specifications and availability subject to change without notice. Contact dealer for most current information.
    tool)
              </p>
            </p>
          </div>
        </div>
      </div>
    );
  };

export default Factory;