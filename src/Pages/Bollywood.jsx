// import CategoryPage from "../components/CategoryPage";

// export default function Bollywood() {
//   return <CategoryPage category="Bollywood" />;
// }

import { useEffect, useState } from "react";
// import MovieSection from "../components/MovieSection";
import tmdb from "../api/tmdb";
import MovieGrid from "../components/MovieGrid";
import { CircularProgress } from "@mui/material";

export default function Bollywood() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");



  useEffect(() => {
    setLoading(true);
    tmdb
      .get("/discover/movie", {
        params: {
          with_original_language: "hi",
          with_origin_country: "IN",
          sort_by: "popularity.desc",
          page:page,
        },
      })
      .then((response) => {
        setMovies(response.data.results);
        setTotalPages(response.data.total_pages);
      })
      .catch((error) => {
        console.log(error);
        setError("Failed to load movies.")
      })
      .finally(()=>{
        setLoading(false);
      })

    tmdb
      .get("/genre/movie/list")
      .then((response) => {
        setGenres(response.data.genres);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);

  if(loading){
    return(
      <div className="page-state">
        <CircularProgress color="info"/>
        <p className="mt-3">Loading movies...</p>
      </div>      
    )
  }

  if(error){
          return(
            <p className="page-state">
              <h3>Something went wrong</h3>
              {error}
            </p>
          )
        }

  return (
    <main>
      {/* <MovieSection
        title="Bollywood"
        movies={movies}
        genres={genres}
        viewAllPath="/bollywood"
      /> */}

      <div className="container py-5">
        <h1 className="mb-4">Bollywood</h1>
          <MovieGrid
            movies={movies}
            genres={genres}
          />
      </div>

        <div className="container d-flex justify-content-center align-items-center gap-3 mb-5">
  <button
    className="btn btn-primary"
    onClick={() => setPage(page - 1)}
    disabled={page === 1}
  >
    ← Previous
  </button>

  <span>
    Page {page} of {totalPages}
  </span>

  <button
    className="btn btn-primary"
    onClick={() => setPage(page + 1)}
    disabled={page === totalPages}
  >
    Next →
  </button>
</div>
    </main>
  );
}