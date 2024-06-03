import React from "react";

const Card = ({ cardHeading, cardLink, children }) => {
  return (
    <div className="col-md-6 col-lg-4  ">
      <a href={cardLink}>
        <div className="card landingBlock h-100  ">
          <div className="card-heading">
            <h3 className="card-title">{cardHeading}</h3>
          </div>
          <div className="card-body d-flex flex-column">{children}</div>
        </div>
      </a>
    </div>
  );
};

export default Card;
