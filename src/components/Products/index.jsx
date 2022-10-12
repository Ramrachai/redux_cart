import React, { useState, useEffect } from "react";
import Product from "./Product";
import style from "./style.module.css";
import Loading from "../Loading";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false)
  const fetchData = async () =>{
      const res = await fetch("https://fakestoreapi.com/products")
      const data = await res.json()
      setProducts(data)
      setLoading(false)
  }
  useEffect(() => {
     setLoading(true); 
     fetchData(); 
  }, []);
  return (
    <div className={style.container}>
      {loading && <Loading /> }
      {!loading && products.map((product) => (<Product product={product} />))}
    </div>
  );
};

export default Products;
