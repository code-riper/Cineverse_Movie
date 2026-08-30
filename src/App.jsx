import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import CategoryNav from "./components/CategoryNav";

import Home from "./pages/Home";
import Hollywood from "./pages/Hollywood";
import Bollywood from "./pages/Bollywood";
import Tollywood from "./pages/Tollywood";

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