import { useParams } from "react-router-dom";
import items from "../data/data";

export default function ItemDetails() {
  const { id } = useParams();
  const item = items.find((item) => item.id === parseInt(id));

  if (!item) {
    return <h2>Item not found</h2>;
  }

  return (
    <div className="item-details">
      <h1>{item.name}</h1>
      <img src={item.itemImg} alt={item.name} />
      <p>{item.desc}</p>
      <strong>Rating: {item.rating}</strong>
    </div>
  );
}
