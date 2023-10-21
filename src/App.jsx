import { useState } from "react";
import "./App.css";
import MovieCard from "./components/MovieCard";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";

function App() {
  const [allMovieData, setAllMovieData] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchMovieData = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://omdbapi.com/?s=${searchMovie}&apikey=a1de9591`
      );
      const data = await res.json();
      setAllMovieData(data.Search);
      console.log(allMovieData);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  console.log(searchMovie);

  return (
    <div>
      <Navbar />
      <div className="bg">
        <SearchBar
          searchMovie={searchMovie}
          setSearchMovie={setSearchMovie}
          fetchMovieData={fetchMovieData}
        />
        <MovieCard allMovieData={allMovieData} loading={loading} />
      </div>
    </div>
  );
}

export default App;
