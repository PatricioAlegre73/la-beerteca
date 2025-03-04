import React from "react";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const cartCount = 10; 

  return (
    <Link to="/cart" className="relative">
      <ShoppingCart className="text-white w-6 h-6" />
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
        {cartCount}
      </span>
    </Link>
  );
};

export default CartWidget;
