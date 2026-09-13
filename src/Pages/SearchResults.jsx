import { useSearchParams } from "react-router-dom";
// import MovieSection from "../components/MovieSection";
// import movies from "../data/movies";
import { useEffect,useState } from "react";
import tmdb from "../api/tmdb";
import MovieGrid from "../components/MovieGrid";
import { CircularProgress } from "@mui/material";

export default function SearchResults() {
  
  const [searchParams] = useSearchParams();
  const [movies, setMovies]=useState([]);
  const query = searchParams.get("q") || "";
  const [genres, setGenres]=useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(()=>{
   
     if(!query.trim()){
      setMovies([]);
      setLoading(false);
      return;
    }
   
    setLoading(true);
    setError("");

   

    tmdb  
      .get("/search/movie",{
        params:{
          query:query,
          page:page,
        },
      })
        .then((response)=>{
          setMovies(response.data.results);
          setTotalPages(response.data.total_pages);
        })
        .catch((error)=>{
          console.log(error);
          setError("Failed to load search results.")
        })
        .finally(()=>{
          setLoading(false);
        });

        tmdb 
          .get("/genre/movie/list")
          .then((response)=>{
            setGenres(response.data.genres);
          })
          .catch((error)=>{
            console.log(error);
          })
  },[query,page]);

  useEffect(()=>{
    setPage(1);
  },[query])

  // const filteredMovies = movies.filter((movie) =>
  //   movie.title.toLowerCase().includes(query.toLowerCase())
  // );

  if (!query.trim()) {
  return (
    <div className="container text-center py-5">
      <h3>Search for a movie</h3>
      <p className="text-secondary">
        Enter a movie name to see search results.
      </p>
    </div>
  );
}


  if (loading) {
  return (
    <div className="page-state">
      <CircularProgress color="info" />
      <p className="mt-3">Loading movies...</p>
    </div>
  );
}



// if(!query.trim()){
//   return(
//     <div className="container text-center py-5">
//       <h3>Search for a movie</h3>
//       <p className="text-secondary">
//         Enter a movie to see search results.
//       </p>
//     </div>
//   )
// }

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
    {movies.length > 0 ? (
      <>
        <div className="container py-4">
          <h1 className="h3 mb-4">
            Search results for "{query}"
          </h1>

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
      </>
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