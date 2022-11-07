import React from "react";
import Spinner from "../components/images/spinner.svg";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading flex">
      <img src={Spinner} alt="" className="spinner" />
    </div>
  
  );
};

export default Loading;