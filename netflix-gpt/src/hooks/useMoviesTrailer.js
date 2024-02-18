import { useDispatch } from "react-redux";
import { API_Options } from "../utils/constant";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useMoviesTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US",
      API_Options
    );
    const json = await data.json();
    const filterData = json.results.filter((movie) => movie.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getTrailer();
  }, []);
};

export default useMoviesTrailer;
