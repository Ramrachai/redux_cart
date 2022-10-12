import React from "react";
import style from "./style.module.css";
import { RiReactjsLine } from "react-icons/ri";
import { SiReactrouter, SiRedux, SiMaterialui, SiVite } from "react-icons/si";

const Home = () => {
  return (
    <div className={style.container}>
      <div className={style.card}>
        <h2>Shopping Cart project</h2>
        <p> <em>Decription:</em> In this project you can view the product information of the store. Then you can add the products to your cart. On mind change you can remove the product from your cart.  </p>
        <p>Technology Used:</p>
        <div className={style.icons}>
          <RiReactjsLine size="3em" title="React" color="#5ED3F3" />
          <SiReactrouter size="3em" title="React-Router-Dom" color="#F14747" />
          <SiRedux size="3em" title="Redux" color="#6C49AC" />
          <SiMaterialui size="3em" title="Material Ui" color="#0582FF" />
          <img title="Vite" src="https://s3-us-west-2.amazonaws.com/ca3db/pbs.twimg.com/c4bff765d9dfb3d8c6163b1de3a8e1a78cf0f9399b5a79c35695a49813821c44.jpg" alt="" width='42px' />
        </div>
      </div>
    </div>
  );
};

export default Home;
