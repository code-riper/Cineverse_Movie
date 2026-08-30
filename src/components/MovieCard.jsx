import { FavoriteBorder, Star } from "@mui/icons-material";

export default function MovieCard({
  title,
  poster,
  genre,
  year,
  rating,
}) {
  return (
    <div className="movie-card">

      {/* Poster */}
      <div className="position-relative">
        <img
          src={poster}
          alt={title}
          className="w-100 rounded-3 movie-poster"
        />

        {/* Watchlist */}
        <button className="btn btn-light rounded-circle position-absolute top-0 end-0 m-2 shadow-sm">
          <FavoriteBorder fontSize="small" />
        </button>
      </div>

      {/* Movie information */}
      <div className="mt-2">

        <h6 className="mb-1 fw-semibold text-truncate">
          {title}
        </h6>

        <p className="mb-1 text-secondary small">
          {genre} • {year}
        </p>

        <div className="d-flex align-items-center gap-1">
          <Star sx={{ fontSize: 17 }} />
          <span className="small fw-semibold">
            {rating}
          </span>
        </div>

      </div>

    </div>
  );
}