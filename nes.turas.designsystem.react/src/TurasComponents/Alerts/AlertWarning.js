import React from "react";

const AlertWarning = ({ alertTitle, alertMessage }) => {
  return (
    <div class="alert alert-warning " role="alert">
      <div class="alert-icon">
        <span class="fa-exclamation-triangle fa"></span>
      </div>
      <div class="alert-content">
        <p class="mb-0">
          <strong>{alertTitle}</strong>
          {alertMessage}
        </p>
      </div>
    </div>
  );
};

export default AlertWarning;
