import React from "react";

const MovieCard = ({ allMovieData, loading }) => {
  return (
    <div>
      {loading ? (
        <div className="flex justify-center ">
          <img
            className=" w-16 py-20"
            src="https://i.gifer.com/ZZ5H.gif"
            alt=""
          />
        </div>
      ) : (
        <div className="main flex flex-wrap lg:px-10 px-4">
          {allMovieData?.map((item, index) => {
            const { Title, Year, Poster } = item;
            return (
              <div key={index} className="child p-2 lg:w-1/4 md:w-1/2 w-full">
                <div className="sub_child bg-[#002e4b] p-3 rounded-2xl">
                  <img
                    src={Poster}
                    alt="Movie Poster"
                    className="w-full rounded-lg mb-2"
                  />
                  <h2 className="text-white text-xl font-bold">{Title}</h2>
                  <h2 className="text-white text-lg mb-2">Year : {Year}</h2>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MovieCard;
