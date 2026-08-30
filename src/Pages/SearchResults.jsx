import { useSearchParams } from "react-router-dom";
import MovieSection from "../components/MovieSection";
import movies from "../data/movies";

export default function SearchResults() {
  const [searchParams] = useSearchParams();

  const query = searchParams.get("q") || "";

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main>
      {filteredMovies.length > 0 ? (
        <MovieSection
          title={`Search results for "${query}"`}
          movies={filteredMovies}
        />
      ) : (
        <div className="container text-center py-5">
          <h3>No movies found</h3>
          <p className="text-secondary">
            Try searching for another movie.
          </p>
        </div>
      )}
    </main>
  );
}