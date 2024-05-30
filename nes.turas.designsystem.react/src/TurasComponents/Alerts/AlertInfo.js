import React from "react";

const AlertInfo = ({ alertTitle, alertMessage }) => {
  return (
    <div class="alert-info alert " role="alert">
      <div class="alert-icon">
        <span class="fa-info-circle fa"></span>
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

export default AlertInfo;