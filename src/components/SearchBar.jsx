import React, { useEffect } from "react";

const SearchBar = ({ searchMovie, setSearchMovie, fetchMovieData }) => {
  useEffect(() => {
    if (searchMovie.length >= 3) fetchMovieData();
  }, [searchMovie.length]);

  return (
    <div className="main flex justify-center py-5 px-4 sticky" id="input">
      <input
        type="text"
        value={searchMovie}
        onChange={(e) => setSearchMovie(e.target.value)}
        placeholder="Search (min 3 letters)"
        className="rounded-lg w-80 bg-gray-200 text-black p-2 outline-none border-2 border-gray-500 placeholder-gray-480"
      />
    </div>
  );
};

export default SearchBar;
