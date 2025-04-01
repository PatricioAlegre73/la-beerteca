import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const Navbar = () => {
  const categories = ["micro", "nano", "regional", "brewpub", "large"];

  return (
    <nav className="bg-blue-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          La Beerteca
        </Link>

        <div className="space-x-6">
          {categories.map((category) => (
            <Link key={category} to={`/category/${category}`} className="text-white hover:underline">
              {category}
            </Link>
          ))}
        </div>

        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;
