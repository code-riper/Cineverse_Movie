
import { useNavigate } from "react-router-dom";
import MovieCard from "./MovieCard";
import { useRef } from "react";

export default function MovieSection({title,movies,genres,viewAllPath}) {
  const navigate=useNavigate();
  const scrollRef =useRef(null);

  const scroll =(direction) => {
    if(!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left:direction === "left" ? -400 : 400,
      behavior:"smooth",
    });
  };

  return (
    <section className="container mb-5">

      {/* Section Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="h4 mb-0 movie-section-title">{title}</h2>

        {viewAllPath && (
          <button className="btn btn-link text-decoration-none movie-view-all"
        onClick={()=>navigate(viewAllPath)}
        >
          View all →
        </button>
        )}
      </div>

      {/* Desktop / Tablet */}

        <div className="d-none d-md-flex align-items-center gap-2">
          <button
        className="btn btn-light movie-scroll-btn"
        onClick={()=>scroll("left")}
        >
            ←
        </button>
        
      <div 
      ref={scrollRef}
      className="d-none d-md-flex gap-3 overflow-auto pb-2 flex-grow-1 movie-section-scroll">

        {movies.map((movie) => (
          <div
            key={movie.id}
            className="flex-shrink-0 movie-section-card"
            // style={{ width: "180px" }}
          >
            <MovieCard movie={movie} genres={genres} />
          </div>
        ))}
      </div>

      <button
      className="btn btn-light movie-scroll-btn"
      onClick={()=>scroll("right")}
      >
        →
      </button>
      </div>

      {/* Mobile */}
      <div className="row g-3 d-md-none">
        {movies.map((movie) => (
          <div key={movie.id} className="col-6">
            <MovieCard movie={movie} genres={genres} />
          </div>
        ))}
      </div>

    </section>
  );
}