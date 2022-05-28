import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import useItem from "../../../hook/useItem";
const AllMyItemShow = ({product}) => {
  const [products, setProducts] = useItem();
  /* useEffect(() => {
    fetch(`http://localhost:5000/product`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []); */
// console.log(products);
  const { _id, name, img, price, quantity, description, supplier } =
    product;
  //delete option
  const handleDelete = (id) => {
    const proceed = window.confirm("Are You Sure Delete?");
    if (proceed) {
      const url = `http://localhost:5000/cars/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
        });
    }
    window.location.reload();
  };

  return (
    <div
      className="g-5 col-sm-12 col-md-6 col-lg-4"
    >
      <Card className="bg-secondary cards " style={{ width: "18rem" }}>
        <Card.Img
          className="img-fluid w-75 d-block mx-auto"
          variant="top"
          src={img}
        />
        <Card.Body>
        <Card.Title>Name:{name}</Card.Title>
          <Card.Text>Price:{price}</Card.Text>
          <Card.Text>Quantity:{quantity}</Card.Text>
          <Card.Text>Description:{description?.slice(0, 50)}</Card.Text>
          <Card.Title>Supplier:{supplier}</Card.Title>

          <Button
            onClick={() => handleDelete(_id)}
            className="d-block w-50 h-50 mx-auto deliver-btn"
            variant="dark"
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AllMyItemShow;
