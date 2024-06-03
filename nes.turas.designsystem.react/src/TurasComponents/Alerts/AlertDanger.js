import React from "react";

const AlertDanger = ({ alertTitle, alertMessage, children }) => {
  return (
    <div className="alert-danger alert " role="alert">
      <div className="alert-icon">
        <span className="fa-bolt fa"></span>
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

export default AlertDanger;
