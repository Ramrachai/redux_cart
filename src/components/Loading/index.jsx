import React from "react";
import style from './style.module.scss'

const Loading = () => {
  return (
    <div className={style.loader}>
      <span>Loading...</span>
    </div>
  );
};

export default Loading;
