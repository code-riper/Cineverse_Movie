import tmdb from "./tmdb";

console.log(
  "Token exists:",
  Boolean(import.meta.env.VITE_TMDB_TOKEN)
);

tmdb
  .get("/movie/popular")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });



// import tmdb from "./tmdb"

// tmdb
//     .get("/movie/popular")
//     .then((response)=>{
//         console.log(response.data);
//     })
//     .catch((error)=>{
//         console.log(error);
//     })