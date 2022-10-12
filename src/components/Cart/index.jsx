import React from "react";
import style from "./style.module.css";
import Table from "react-bootstrap/Table";
import { useSelector, useDispatch } from "react-redux";
import {remove} from '../../redux/features/cartSlice'
import ClearIcon from '@mui/icons-material/Clear';
import { IconButton } from "@mui/material";



const Cart = () => {
  const {cart} = useSelector((state) => state);
  const dispatch = useDispatch()

  console.log("cart page: ",cart);

  function handleClick(id){
    dispatch(remove(id))
    console.log(clicked)
  }

  return (
    <div className={style.container}>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            
            <th>Image</th>
            <th>Product Title</th>
            <th>Price</th>
            <th>Action</th>

          </tr>
        </thead>
        <tbody>
          
          {cart.length==0 ? <p className="text-center text-info mt-4">Cart is empty! Please add products to cart</p> :  cart.map((product) => {
            return (
              <tr key={product.id}>
                <td><img src={product.image} alt={product.title} width='50px' height='auto'/></td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td> <IconButton color="error" onClick={()=>handleClick(product.id)}><ClearIcon /></IconButton> </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Cart;
