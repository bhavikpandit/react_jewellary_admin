import React, { useState } from "react";
// import "./style.scss";

const Loading = ({ isSuspense, children }) => {
const [isLoading, setIsLoading] = useState(true)
  return (
    <>
      {(isSuspense || isLoading) && (
        <div className="spinner-wrap">
          <div className="spinner">
            <div className="double-bounce1"></div>
            <div className="double-bounce2"></div>
          </div>
        </div>
      )}
      {children}
    </>
  );
};

export default Loading;
