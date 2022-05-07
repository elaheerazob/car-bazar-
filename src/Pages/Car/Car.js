import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './car.css'

const Car = ({ car }) => {
  const { name, price, description, img, quantity,_id } = car;
  const navigate = useNavigate();


  const navigateToCarDetail = id =>{
    navigate(`/cars/${id}`);
}

  return (
    <div className=" gx-5 col-sm-12 col-md-6 col-lg-4 mb-4">
      <Card>
        <Card.Img variant="top" className="w-75 m-auto" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <h3>${price}</h3>
          <Card.Text>{description.slice(0, 150)}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button onClick={() => navigateToCarDetail(_id)} className=" w-100 btn btn-dark mb-2">Update</Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Car;
