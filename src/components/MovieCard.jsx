import { useNavigate } from "react-router-dom";

export default function MovieCard({movie,genres}) {
//   console.log("genres:", genres);
// console.log("is array:", Array.isArray(genres));

const navigate= useNavigate();

  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "/no-poster.jpg";

    const genreNames = movie.genre_ids
            ?.map((id)=>{
              const genre = genres.find((genre)=> genre.id === id);
              return genre?.name;
            })
            .filter(Boolean)
            .join(" • ")

  return (
    <div className="card movie-card"
    onClick={()=>navigate(`/movie/${movie.id}`)}
    style={{cursor:"pointer"}}
    >
      <img
        src={imageUrl}
        alt={movie.title}
        className="card-img-top "
      />

      <div className="card-body">
        <h5 className="movie-title">{movie.title}</h5>

        <p className="movie-rating">
          ⭐ {movie.vote_average.toFixed(1)}
        </p>

        <p className="movie-genres">
          {genreNames}
        </p>

        <p className="movie-year mb-0">
          {movie.release_date?.slice(0, 4)}
        </p>
      </div>
    </div>
  );
}