import React from "react";
import Loader from "react-loader-spinner";

const ButtonLoader =()=> {
  return (
    <div>
      <Loader
        type="Oval"
        color="#FFFFFF"
        height={20}
        width={50}
        // timeout={15000} // 3 secs
      />
    </div>
  );
};

export default ButtonLoader;
