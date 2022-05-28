import { useEffect, useState } from "react";

const useItem = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://pure-eyrie-56376.herokuapp.com/cars`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return [products, setProducts];
};

export default useItem;
