//https://dev.to/olenadrugalya/layout-component-and-why-we-use-it-in-react-d8b

// MD: This is where we can start trying to imort our styles and JS.
import "@nestechnology/turas-design-system/dist/css/turas-design-system.min.css";

import React from "react";

const Layout = ({ children }) => {
  return <>{children}</>;
};

export default Layout;
