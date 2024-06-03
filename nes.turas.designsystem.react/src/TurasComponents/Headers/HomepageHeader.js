import React from "react";
const HomepageHeader = ({
  headerTitle,
  headerText,
  buttonLink,
  buttonText,
}) => {
  return (
    <div className="main-banner" id="sg-header">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 flexy-text">
            <div className="home-banner-text flexy-content">
              <h1 id="bannerPageTitle">{headerTitle}</h1>
              <p id="homeBannerText">{headerText}</p>

              <a href={buttonLink} className="btn btn-primary">
                {buttonText}
              </a>
            </div>
          </div>

          <div className="d-none d-lg-block col-lg-6">
            <img src="" class="img-fluid" alt="Turas Design System"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageHeader;
