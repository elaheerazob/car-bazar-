import React, { useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useCarDetails from '../../Hooks/useCarDetails';
import './ManageProduct.css';

const ManageProduct = (props) =>  {
  const [car, setCar] = useCarDetails();
  useEffect(() => {
    fetch(`https://pure-eyrie-56376.herokuapp.com/cars`)
      .then((res) => res.json())
      .then((data) => setCar(data));
  }, []);

  const { name, price, description, img, quantity,_id } =
    props.carAll;
  //delete option
  const handleDelete = (id) => {
    const proceed = window.confirm("Are You Sure Delete?");
    if (proceed) {
      const url = `https://pure-eyrie-56376.herokuapp.com/cars/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          setCar(data);
        });
    }
    window.location.reload();
  };
  
    return (
      <Card className="bg-info cards m-auto mb-2 " style={{ width: "18rem" }}>
        <Card.Img
          className="img-fluid w-75 d-block mx-auto"
          variant="top"
          src={img}
        />
        <Card.Body>
          <Card.Title>Name:{name}</Card.Title>
          <Card.Text>Price:{price}</Card.Text>
          <Card.Text>Quantity:{quantity}</Card.Text>
          <Card.Text>Description:{description.slice(0, 50)}</Card.Text>
          

          <Button
            onClick={() => handleDelete(_id)}
            className="d-block w-50 h-50 mx-auto deliver-btn"
            variant="primary"
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    );
  };

export default ManageProduct;