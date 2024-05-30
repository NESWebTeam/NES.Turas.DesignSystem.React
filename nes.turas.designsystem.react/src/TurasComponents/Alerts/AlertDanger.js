import React from "react";

const AlertDanger = ({ alertTitle, alertMessage, children }) => {
  return (
    <div class="alert-danger alert " role="alert">
      <div class="alert-icon">
        <span class="fa-bolt fa"></span>
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

export default AlertDanger;
