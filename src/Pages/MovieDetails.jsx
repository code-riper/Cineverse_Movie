import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tmdb from "../api/tmdb";
import { CircularProgress } from "@mui/material";

export default function MovieDetails() {

    const [movie,setMovies]=useState(null);
    const { id } =useParams();
    const [videos, setVideos] = useState([]);

    console.log(id)

    useEffect(()=>{
        tmdb    
            .get(`/movie/${id}`)
            .then((response)=>{
                setMovies(response.data)
            })
            .catch((error)=>{
                console.log(error);
            });

            tmdb    
                .get(`/movie/${id}/videos`)
                .then((response)=>{
                    setVideos(response.data.results);
                    
                })
                .catch((error)=>{
                    console.log(error);
                })
    },[id]);

    console.log(movie)
    console.log("Movie Video:",videos);
    if(!movie){
        return(
            <div className="text-center mt-5">
                <CircularProgress color="info" />
            </div>
        )
    }

    const imageUrl = movie.poster_path
  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  : "/no-poster.jpg";

  const backdropUrl = movie.backdrop_path
  ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
  : null;

  const hours=Math.floor(movie.runtime / 60);
  const minutes=movie.runtime % 60;


  return (
  <main className="container py-5">
    {backdropUrl && (
      <img
        src={backdropUrl}
        alt={movie.title}
        className="img-fluid rounded mb-4 movie-backdrop"
      />
    )}
    <div className="row g-4 movie-details">
      
      <div className="col-md-4">
       
          <img
            src={imageUrl}
            alt={movie.title}
            className="img-fluid rounded mb-4"
          />
       
      </div>

      <div className="col-md-8">
        <h1>{movie.title}</h1>

        <p>
          ⭐ {movie.vote_average.toFixed(1)}
        </p>

        <p>
          Release date: {movie.release_date}
        </p>

        <p>
          {movie.genres.map((genre) => genre.name).join(" • ")}
        </p>

        <h3>Overview</h3>

        <p>
          {movie.overview}
        </p>

        <p>
          Runtime: {hours}h {minutes}m
        </p>
      </div>

    </div>
  </main>
);

}