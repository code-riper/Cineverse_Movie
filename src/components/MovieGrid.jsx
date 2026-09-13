import MovieCard from "./MovieCard";

export default function MovieGrid({movies,genres}){
    return(
        <div className="row g-4">
            {movies.map((movie)=>(
                <div key={movie.id} className="col-6 col-md-4 col-lg-3">
                    <MovieCard movie={movie} genres={genres}/>
                </div>

            ))

            }
        </div>
    );
}