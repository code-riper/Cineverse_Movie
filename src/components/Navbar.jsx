import { NavLink } from "react-router-dom";
import { AccountCircle, Menu } from "@mui/icons-material";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom">
      <div className="container-fluid px-4">

        {/* Logo */}
        <NavLink
          className="navbar-brand fw-bold fs-4"
          to="/"
        >
          🎬 CineVerse
        </NavLink>

        {/* Mobile Menu */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#cineVerseNavbar"
          aria-controls="cineVerseNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <Menu fontSize="large" />
        </button>

        {/* Navigation */}
        <div
          className="collapse navbar-collapse"
          id="cineVerseNavbar"
        >
          <ul className="navbar-nav mx-auto gap-lg-3">

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/"
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/hollywood"
              >
                Hollywood
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/bollywood"
              >
                Bollywood
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/tollywood"
              >
                Tollywood
              </NavLink>
            </li>

          </ul>

          {/* Profile */}
          <button className="btn border-0">
            <AccountCircle fontSize="large" />
          </button>

        </div>
      </div>
    </nav>
  );
}