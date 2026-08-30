import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "@mui/icons-material";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();

    if (searchTerm.trim() === "") {
      return;
    }

    navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
  }

  return (
    <div className="container my-4">
      <form
        className="input-group"
        onSubmit={handleSearch}
      >
        <input
          type="text"
          className="form-control"
          placeholder="Search movies, actors, genres..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button
          className="btn btn-dark"
          type="submit"
        >
          <Search />
        </button>
      </form>
    </div>
  );
}