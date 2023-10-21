import React from "react";

const Navbar = () => {
  return (
    <div className="main lg:flex md:flex flex-wrap justify-between items-center p-4 bg-[#62859a] shadow-md sticky top-0">
      <div className="left flex items-center justify-center space-x-3">
        <img
          src="https://movie-app-88kamal.vercel.app/clipart3105859.png"
          className="w-10"
          alt="brand logo"
        />
        <h2
          className="font-bold text-2xl text-white"
          style={{ cursor: "pointer" }}
        >
          MovieStore
        </h2>
      </div>
      <div className="right">
        <ul
          className="flex text-white space-x-4 justify-center"
          style={{ cursor: "pointer" }}
        >
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Services</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
