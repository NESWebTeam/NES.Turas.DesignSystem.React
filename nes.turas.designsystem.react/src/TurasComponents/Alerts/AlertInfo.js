import React from "react";

const AlertInfo = ({ alertTitle, alertMessage, children }) => {
  return (
    <div className="alert-info alert" role="alert">
      <div className="alert-icon">
        <span className="fa-info-circle fa"></span>
      </div>
      <div className="alert-content">
        <p className="mb-0">
          <strong>{alertTitle} </strong>
          {alertMessage}
        </p>
        {children}
      </div>
    </div>
  );
};

export default AlertInfo;
