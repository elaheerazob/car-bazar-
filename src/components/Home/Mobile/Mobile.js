import React from "react";
import images from "../../../images/img/5.jpg";
const Mobile = () => {
  return (
    <div className="container mt-5" >
      <h1 className="text-center text-info">Super Car </h1>
      <hr />
      <div className="d-flex ">
        <div>
          <img src={images} className="img-fluid rounded" alt="" />
        </div>
        <div>
          <p className="m-5 p-4">
            <h1 className="text-center text-info">Super Car Details</h1>
            <hr />
            <p>
            The transmission is a gearbox filled with gears and gear trains that makes effective use of the engine’s torque to change the gears and power the vehicle.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
