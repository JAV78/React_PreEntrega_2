
import React from "react";
import { Link, Outlet } from "react-router-dom";
import CartWidget from "../CartWidget";

import "./Layout.css"

function Layout() {
  return (
    <>
       
     <nav>
     <logo />
       
        <ul>
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/cafe"}>Café</Link>
            </li>
            <li>
                <Link to={"/salado"}>Salado</Link>
            </li>
            <li>
                <Link to={"/dulce"}>Dulce</Link>
            </li>
        </ul>  
        <CartWidget/>       

    </nav>
   
    <Outlet/>
    </>
  )
}

export default Layout