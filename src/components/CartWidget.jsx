import React from "react";
import { Link } from "react-router-dom";

function CartWidget({ count }) {
  return (
    <Link to="/cart" style={{ position: "relative", display: "inline-block" }}>
      🛒
      {count > 0 && (
        <span style={{
          position: "absolute",
          top: -10,
          right: -10,
          background: "red",
          borderRadius: "50%",
          color: "white",
          padding: "2px 6px",
          fontSize: 12
        }}>
          {count}
        </span>
      )}
    </Link>
  );
}

export default CartWidget;
