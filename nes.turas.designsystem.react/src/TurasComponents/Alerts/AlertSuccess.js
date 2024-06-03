import React from "react";

const AlertSuccess = ({ alertTitle, alertMessage, children }) => {
  return (
    <div className="alert alert-success" role="alert">
      <div className="alert-icon">
        <span className="fa-check fa"></span>
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

export default AlertSuccess;
