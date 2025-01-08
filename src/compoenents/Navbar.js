import { NavLink, Outlet } from "react-router-dom";
import "../styles/styles.css";

export default function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <span className="navbar-links">
          <NavLink
            className={({ isActive }) =>
              isActive ? "navbar-link navbar-link-active" : "navbar-link"
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "navbar-link navbar-link-active" : "navbar-link"
            }
            to="/items"
          >
            Items
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "navbar-link navbar-link-active" : "navbar-link"
            }
            to="/about"
          >
            About
          </NavLink>
        </span>
        <span>
          <img
            className="navbar-icon"
            alt="settings"
            src="https://cdn-icons-png.flaticon.com/128/3953/3953226.png"
          />
        </span>
      </div>
      <Outlet />
    </>
  );
}
