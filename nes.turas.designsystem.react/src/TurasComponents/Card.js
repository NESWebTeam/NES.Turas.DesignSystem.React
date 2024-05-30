import React from 'react'

const Card = ({cardHeading, cardLink, children}) => {
    return (
      <div class="col-md-6 col-lg-4  "><a href={cardLink}>
        <div class="card landingBlock h-100  ">
          <div class="card-heading">
            <h3 class="card-title">{cardHeading}</h3>
          </div>
          <div class="card-body d-flex flex-column">
            {children}
          </div>
        </div>
      </a></div>
    )
  }
  
  export default Card