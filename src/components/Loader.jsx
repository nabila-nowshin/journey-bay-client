import React from "react";

const Loader = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-base-100">
      <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
