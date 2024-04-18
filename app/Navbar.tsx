import React from "react";
import Link from "next/link";
import Selection from "./Selection";

const Navbar = () => {
  return (
    <nav className="flex flex-col justify-center items-center">
      <h1>The Dojo Blog</h1>
      <Selection />
    </nav>
  );
};

export default Navbar;
