import { Link } from "react-router-dom";
import "../styles/styles.css";
import items from "../data/data";

export default function Items() {
  return (
    <div className="page-container">
      <h1>Items</h1>
      <Link className="link-back" to="/">
        <div className="back-div">
          <img
            className="back-btn"
            alt="back"
            src="https://cdn-icons-png.flaticon.com/128/2099/2099238.png"
          />
        </div>
      </Link>

      <div className="item-cards">
        {items.map((item) => (
          <Link key={item.id} to={`${item.id}`}>
            <div className="card">
              <div className="img-holder">
                <img alt="item" src={item.itemImg} />
              </div>
              <div className="details">
                <h5> {item.name}</h5>
                <p> {item.desc}</p>
                <p>
                  <strong> {item.rating}</strong>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
