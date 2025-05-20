import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { totalQuantity } = useContext(CartContext);

  return (
    <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 20px", background: "#f5deb3" }}>
      <h1 style={{ fontFamily: "'Bitter', serif" }}>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>La Beerteca 🍺</Link>
      </h1>
      <div style={{ display: "flex", gap: "15px" }}>
        <Link to="/category/industrial">Industrial</Link>
        <Link to="/category/artesanal">Artesanal</Link>
        <Link to="/category/saborizada">Saborizada</Link>
        <CartWidget count={totalQuantity()} />
      </div>
    </nav>
  );
}

export default Navbar;
