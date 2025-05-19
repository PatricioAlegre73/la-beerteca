import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import CartWidget from "./CartWidget";

function Navbar() {
  const { totalQuantity } = useContext(CartContext);

  return (
    <nav style={{ padding: 20, borderBottom: "1px solid #ccc", display: "flex", justifyContent: "space-between" }}>
      <h1><Link to="/">La Beerteca</Link></h1>
      <div>
        <Link style={{ marginRight: 15 }} to="/">Todos</Link>
        <Link style={{ marginRight: 15 }} to="/category/industrial">Industriales</Link>
        <Link style={{ marginRight: 15 }} to="/category/artesanal">Artesanales</Link>
        <Link style={{ marginRight: 15 }} to="/category/saborizada">Saborizadas</Link>
        <CartWidget count={totalQuantity()} />
      </div>
    </nav>
  );
}

export default Navbar;
