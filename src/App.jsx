import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import CategoryNav from "./components/CategoryNav";

import Home from "./Pages/Home";
import Hollywood from "./Pages/Hollywood";
import Bollywood from "./Pages/Bollywood";
import Tollywood from "./Pages/Tollywood";

import "./App.css";
import SearchResults from "./Pages/SearchResults";

function App() {
  return (
    <>
      <Navbar />
      <SearchBar />
      <CategoryNav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hollywood" element={<Hollywood />} />
        <Route path="/bollywood" element={<Bollywood />} />
        <Route path="/tollywood" element={<Tollywood />} />
        <Route path="/search" element={<SearchResults/>}/>
      </Routes>
    </>
  );
}

export default App;