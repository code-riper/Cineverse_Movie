import { useEffect, useState } from "react";
// import MovieSection from "../components/MovieSection";
import tmdb from "../api/tmdb";
import { CircularProgress } from "@mui/material";
import MovieGrid from "../components/MovieGrid";

export default function PopularMovies() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading , setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {

    setLoading(true);

    tmdb
      .get("/movie/popular",{
        params:{
        page:page,
        }
      })
      .then((response) => {
        setMovies(response.data.results);
        setTotalPages(response.data.total_pages);
        // console.log("New Data",response.data.total_pages);
      })
      .catch((error) => {
        console.log(error);
        setError("Failed to load popular movies.")
      })
      .finally(()=>{
        setLoading(false);
      });

  }, [page]);

  useEffect(()=>{
    tmdb
      .get("/genre/movie/list")
      .then((response) => {
        setGenres(response.data.genres);
      })
      .catch((error) => {
        console.log(error);
      })
  },[]);

  if(loading){
    return(
      <div className="page-state">
        <CircularProgress color="info"/>
        <p className="mt-3">Loading movies...</p>
      </div>
    );
  }

  if (error) {
  return (
    <div className="page-state">
      <h3>Something went wrong</h3>
      <p>{error}</p>
    </div>
  );
}

  return (
    <main>
      <div className="container py-4">
          <h1 className="h3 mb-4">Popular Movies</h1>

          <MovieGrid
            movies={movies}
            genres={genres}
          />
        </div>

    <div className="container d-flex justify-content-center align-items-center gap-3 mb-5">

        <button
         className="btn btn-primary"
         onClick={()=>setPage(page-1)}
         disabled={page===1}
        >
            ← Previous
        </button>

        <span>Page {page} of {totalPages}</span>

        <button
         className="btn btn-primary"
         onClick={()=>setPage(page+1)}
         disabled={page === totalPages}
        >
             Next →
        </button>

    </div>


    </main>
  );
}