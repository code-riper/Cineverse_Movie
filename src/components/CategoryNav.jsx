import { NavLink } from "react-router-dom";

export default function CategoryNav() {
  return (
    <div className="container mb-4 d-lg-none">
      <div className="d-flex gap-3 overflow-auto">

        <NavLink
          to="/"
          className="btn btn-light border rounded-pill text-nowrap"
        >
          All
        </NavLink>

        <NavLink
          to="/hollywood"
          className="btn btn-light border rounded-pill text-nowrap"
        >
          Hollywood
        </NavLink>

        <NavLink
          to="/bollywood"
          className="btn btn-light border rounded-pill text-nowrap"
        >
          Bollywood
        </NavLink>

        <NavLink
          to="/tollywood"
          className="btn btn-light border rounded-pill text-nowrap"
        >
          Tollywood
        </NavLink>

      </div>
    </div>
  );
}