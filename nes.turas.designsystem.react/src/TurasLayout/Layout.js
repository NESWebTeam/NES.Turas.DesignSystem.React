//https://dev.to/olenadrugalya/layout-component-and-why-we-use-it-in-react-d8b

import React from 'react';

const Layout =({children}) =>{
    return(
        <>
        <p>Navigation</p>
           {children}
           <p>Footer</p>
        </>
    )
}

export default Layout;