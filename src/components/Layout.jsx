import Navbar  from './Navbar';
import Footer  from './Footer';
import {Outlet} from "react-router-dom";
import Login from './login/login';
import React, {useState, useCallback} from "react";

const Layout = () => {

    const [isSubmitted, setIsSubmitted] = useState(false);
    const callBack = useCallback((x) => {setIsSubmitted(x)}, [setIsSubmitted]);
    
    return (
        <>
            <Navbar isSubmitted={isSubmitted} setIsSubmitted={callBack} />
            {isSubmitted ? (<Outlet />) : (<Login setIsSubmitted={callBack} />)}
            <Footer />
        </>
        )
}

export default Layout;