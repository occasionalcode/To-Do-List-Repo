import React from "react";
import Link from "next/link";
import Selection from "./Selection";

const Navbar = () => {
  return (
    <nav className="flex flex-col justify-center items-center mt-7">
      <h1 className="font-bold text-3xl">TO DO MANAGER</h1>
      <Selection />
    </nav>
  );
};

export default Navbar;
