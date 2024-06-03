import React from "react";

const AlertWarning = ({ alertTitle, alertMessage, children }) => {
  return (
    <div className="alert alert-warning " role="alert">
      <div className="alert-icon">
        <span className="fa-exclamation-triangle fa"></span>
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

export default AlertWarning;
