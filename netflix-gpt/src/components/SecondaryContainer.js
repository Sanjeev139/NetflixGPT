import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  if (!movies) return;

  return (
    <div className="bg-black">
      <div className="relative -mt-96 pl-12 z-20">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies}></MovieList>
        <MovieList title={"Popular"} movies={movies?.popularMovies}></MovieList>
        <MovieList title={"Top Rated"} movies={movies?.topRatedMovies}></MovieList>
        <MovieList title={"Upcoming"} movies={movies?.upcomingMovies}></MovieList>
        <MovieList title={"Action"} movies={movies?.nowPlayingMovies}></MovieList>
      </div>
    </div>
  );
};

export default SecondaryContainer;
