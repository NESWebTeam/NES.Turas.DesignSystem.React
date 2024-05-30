import React from "react";

const AlertSuccess = ({ alertTitle, alertMessage, children }) => {
  return (
    <div class="alert alert-success" role="alert">
      <div class="alert-icon">
        <span class="fa-check fa"></span>
      </div>
      <div class="alert-content">
        <p class="mb-0">
          <strong>{alertTitle}</strong>
          {alertMessage}
          {children}
        </p>
      </div>
    </div>
  );
};

export default AlertSuccess;
