import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateCar = () => {
    const { updateCarid } = useParams();
    const navigate = useNavigate();
    const [car,setCar] = useState({});
    useEffect(() =>{
        const url =`http://localhost:5000/cars/${updateCarid}`;
        fetch(url)
        .then(res =>res.json())
        .then(data =>setCar(data))
    } ,[]);

    const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    fetch(
      `http://localhost:5000/cars/${updateCarid}?oldQuantity=${car.quantity}`,
      {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("Successfull", "Thank you");
        window.location.reload();
      });
  };

  // decrise one

  const decriseOne = () => {
    fetch(
      `http://localhost:5000/cars/${updateCarid}?oldQuantity=${car.quantity}`,
      {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("Successfull", "Thank you");
        window.location.reload();
      });
  };
    return (
        <div className="mt-5 container text-center">
      <h2>Welcome to Car Bazar  : {car.name}</h2>
      <hr />
      <div className="row d-flex align-items-center">
        <div className="col-md-6">
          <img
            className="img-fluid w-75 rounded-3"
            src={car.img}
            alt=""
          />
          <h5>Name: {car.name}</h5>
          <p>Discription: {car.description}</p>
          <h5>Seller: {car.seller}</h5>
          <h5>Quantity: {car.quantity}</h5>
          <button onClick={decriseOne} className="deliver-btn">
            Deliverd
          </button>
        </div>
        <div className="col-md-6">
          <h3 className="mb-3">Add quantity</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="number" {...register("quantity", {required: true})} />
            <input type="submit" value="Add" />
          </form>
        </div>
        <div className="mt-5 ">
          <button onClick={()=>navigate('/')} className="buy-btn py-2">All inventory</button>
        </div>
      </div>
    </div>
    );
};

export default UpdateCar;