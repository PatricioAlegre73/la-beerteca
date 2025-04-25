import { Link } from "react-router-dom";

function Item({ item }) {
  return (
    <div>
      <h3>{item.name}</h3>
      <img src={item.image} alt={item.name} />
      <p>{item.description}</p>
      <Link to={`/item/${item.id}`}>Ver detalles</Link>
    </div>
  );
}

export default Item;
