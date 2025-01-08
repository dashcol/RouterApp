import { Link } from "react-router-dom";
import "../styles/styles.css";

export default function About() {
  return (
    <div className="page-container">
      <h1>About</h1>
      <Link className="link-back" to="/">
        <div className="back-div">
          <img
            className="back-btn"
            alt="back"
            src="https://cdn-icons-png.flaticon.com/128/2099/2099238.png"
          />
        </div>
      </Link>
    </div>
  );
}
