import MovieSection from "./MovieSection";
import movies from "../data/movies";

export default function CategoryPage({ category }) {
  const categoryMovies = movies.filter(
    (movie) => movie.category === category
  );

  return (
    <main>
      <MovieSection
        title={`${category} Movies`}
        movies={categoryMovies}
      />
    </main>
  );
}