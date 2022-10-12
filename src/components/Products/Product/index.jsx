import React from "react";
import { useDispatch } from "react-redux";
import style from "./style.module.scss";
import {add,remove} from '../../../redux/features/cartSlice'

const Product = ({product}) => {

  const dispatch = useDispatch()

  const handleAdd = (prod) =>{
    dispatch(add(prod))
  }

  return (
    <div className={style.card} key={product.id}>
      <div className={style.card2} key={product.id}>
        <img src={product.image} alt={product.title} />
        <h3>{product.title} </h3>
        <p>Price: Tk{product.price}</p>
        <button onClick={()=>{handleAdd(product)}}>
          <span>Add to cart </span>
          <i></i>
        </button>
      </div>
    </div>
  );
};

export default Product;
