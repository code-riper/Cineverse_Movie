import { useEffect, useState } from "react";
import MovieSection from "../components/MovieSection";
import tmdb from "../api/tmdb";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] =useState(true);
  const [error, setError] =useState("");
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    tmdb.get("/movie/popular")
      .then((response) => {
        setMovies(response.data.results);
        console.log(response.data.results);
      })
      .catch((error) => {
        console.log(error);
        setError("Failed to load movies.");
      })
      .finally(()=>{
        setLoading(false);
      });

      tmdb.get("/genre/movie/list")
      .then((response)=>{
        setGenres(response.data.genres)
        console.log(response.data.genres)
      })
      .catch((error)=>{
        console.log(error);
      })
      
  }, []);



  if(loading){
    return <p className="text-center mt-5">Loading movies...</p>;
  }

  if(error){
    return <p className="text-center text-danger mt-5">{error}</p>;
  }

  return (
    <main>
      <MovieSection
        title="Popular Movies"
        movies={movies.slice(0,10)}
        genres={genres}
        viewAllPath="/popular"
      />
    </main>
  );
}