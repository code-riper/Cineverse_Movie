import MovieCard from "./MovieCard";

export default function MovieSection({ title, movies }) {
  return (
    <section className="container mb-5">

      {/* Section Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="h4 mb-0">{title}</h2>

        <button className="btn btn-link text-decoration-none">
          View all →
        </button>
      </div>

      {/* Desktop / Tablet */}
      <div className="d-none d-md-flex gap-3 overflow-auto pb-2">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="flex-shrink-0"
            style={{ width: "180px" }}
          >
            <MovieCard
              title={movie.title}
              poster={movie.poster}
              genre={movie.genre}
              year={movie.year}
              rating={movie.rating}
            />
          </div>
        ))}
      </div>

      {/* Mobile */}
      <div className="row g-3 d-md-none">
        {movies.map((movie) => (
          <div key={movie.id} className="col-6">
            <MovieCard
              title={movie.title}
              poster={movie.poster}
              genre={movie.genre}
              year={movie.year}
              rating={movie.rating}
            />
          </div>
        ))}
      </div>

    </section>
  );
}