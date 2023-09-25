import "./App.css";
import MovieCard from "./components/MovieCard";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <MovieCard />
    </div>
  );
}

export default App;
