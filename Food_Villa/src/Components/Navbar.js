import Logo from "../assets/img/Food_Villa.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import {  useState } from "react";
import useOnline from "./useOnline";

function Navbar() {
  const [isLoggedIn, setisLoggedIn] = useState(true);
  const isOnline = useOnline();
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);
  return (
    <div >
      <div className="flex shadow-md justify-between bg-purple-300">
        <Link to="/">
          {" "}
          <img className="h-16 font-bold w-full m-2 mx-3 navlogo" src={Logo} alt="logo" />
        </Link>
        <div className="mt-6 mr-4 items-center">
          <ul className="flex space-x-4 p-2">
            <Link to="/">
              <li className=" font-bold">Home</li>
            </Link>
            <Link to="/about">
              <li className=" font-bold">About</li>
            </Link>
            <Link to="/contact">
              <li className=" font-bold">Contact Us</li>
            </Link>
            <Link to="/instamart">
              <li className=" font-bold">Instamart</li>
            </Link>
            <Link to="/help">
              <li className=" font-bold">Help</li>
            </Link>
            <Link to="/cart">
              <li className=" font-bold">
                <i className="fa fa-shopping-cart"></i> Cart -{" "}
                {cartItems.length}
              </li>
            </Link>
          </ul>
        </div>
        <div className="mt-6 mr-4 items-center">
          
       {isLoggedIn ? (
        <button
          className="text-xs font-bold h-8 w-16  center shadow-md px-2 py-2 outline-none m-2 rounded border border-black hover:border-gray-500 transition-all duration-200 ease-in-out text-gray-700 cursor-pointer"
          onClick={() => setisLoggedIn(false)}
        >
          Login <b>⇦</b>
        </button>
      ) : (
        <button
          className="text-xs font-bold h-8 w-16  center shadow-md px-2 py-2 outline-none m-2  rounded border border-black hover:border-gray-500 transition-all duration-200 ease-in-out text-gray-700 cursor-pointer"
          onClick={() => setisLoggedIn(true)}
        >
          Logout
        </button>
      )} 
      
        </div>
      </div>
    </div>
  );
}

export default Navbar;
