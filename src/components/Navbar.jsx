import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>La Beerteca</h1>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/categoria/industriales">Industriales</Link></li>
        <li><Link to="/categoria/artesanales">Artesanales</Link></li>
        <li><Link to="/categoria/saborizadas">Saborizadas</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
