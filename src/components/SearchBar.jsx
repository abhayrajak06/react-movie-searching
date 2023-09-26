import React from "react";

const SearchBar = ({ searchMovie, setSearchMovie, fetchMovieData }) => {
  return (
    <div className="main flex justify-center py-5 px-4">
      <input
        type="text"
        value={searchMovie}
        onChange={(e) => setSearchMovie(e.target.value)}
        placeholder="Search"
        className="rounded-l-lg w-80 bg-gray-200 text-black p-2 outline-none border-2 border-gray-500 placeholder-gray-480"
      />
      <button
        onClick={fetchMovieData}
        className="bg-[#40407a] shadow-md px-4 text-white rounded-r-lg border-b-2 border-t-2 border-r-2 border-gray-500"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
