import React from "react";
import { INSTAMART_URL } from "./Constants";
import Footer from "./Footer";
import Nav from "./Navbar";


const Instamart = () => {
  return (
    <div>
    <Nav/>
        <div className="max-w-[1320px] mx-6 lg:mx-auto flex justify-center items-center flex-wrap flex-col lg:flex-row my-16">
      <div className="lg:w-[50%] items-center">
        <p className="font-serif text-gray-500 text-xl font-bold text-gradient-orange text-center">
          Get Ready for an Incredible Culinary Experience
        </p>
        <img
          src={INSTAMART_URL}
          alt="instamart-img"
          className="mt-4 mx-auto rounded-xl h-64"
        />
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Instamart;