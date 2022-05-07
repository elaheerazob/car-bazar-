import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import useCarDetails from "../../Hooks/useCarDetails";

const CarDetails = () => {
  const { carId } = useParams();
  const [car] = useCarDetails(carId);

  return (
    <div>
      <Card className="m-auto mt-4" style={{ width: "25rem" } } >
        <Card.Img variant="top" src={car.img} />
        <Card.Body>
          <h2>{car.name}</h2>
          <h3>Price: ${car.price}</h3>
          <h5>Stock:{car.quantity}</h5>
          <Card.Text>
          {car.description}
          </Card.Text>
          <Button variant="primary">Delivered</Button>
          <Link to={`/updateCar/${car._id}`}><Button variant="primary">Add Stock</Button></Link>
        </Card.Body>
      </Card>
    </div>
  );
};
export default CarDetails;
