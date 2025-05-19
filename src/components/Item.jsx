import { Link } from "react-router-dom";

function Item({ producto }) {
  return (
    <div className="card">
      <img src={producto.image} alt={producto.name} style={{ width: '100%', borderRadius: '8px' }} />
      <h3>{producto.name}</h3>
      <p>{producto.description}</p>
      <p>${producto.price}</p>
      <Link to={`/item/${producto.id}`}>
        <button>Ver detalle</button>
      </Link>
    </div>
  );
}

export default Item;
