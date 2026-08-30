import MovieSection from "../components/MovieSection";
import movies from "../data/movies";

export default function Home() {
  const trendingMovies = movies.filter(
    (movie) => movie.trending
  );

  const hollywoodMovies = movies.filter(
    (movie) => movie.category === "Hollywood"
  );

  const bollywoodMovies = movies.filter(
    (movie) => movie.category === "Bollywood"
  );

  const tollywoodMovies = movies.filter(
    (movie) => movie.category === "Tollywood"
  );

  return (
    <main>
      <MovieSection
        title="Popular Movies"
        movies={movies}
      />

      <MovieSection
        title="Trending Movies"
        movies={trendingMovies}
      />

      <MovieSection
        title="Hollywood Movies"
        movies={hollywoodMovies}
      />

      <MovieSection
        title="Bollywood Movies"
        movies={bollywoodMovies}
      />

      <MovieSection
        title="Tollywood Movies"
        movies={tollywoodMovies}
      />
    </main>
  );
}