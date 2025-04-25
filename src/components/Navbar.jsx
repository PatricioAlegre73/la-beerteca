import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/category/industriales">Industriales</Link></li>
        <li><Link to="/category/artesanales">Artesanales</Link></li>
        <li><Link to="/cart"><CartWidget /></Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
