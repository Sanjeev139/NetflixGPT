import { useDispatch } from "react-redux";
import { API_Options } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const url = "https://api.themoviedb.org/3/movie/now_playing?page=1";

  const getNowPlayingMovies = async () => {
    const getMovies = await fetch(url, API_Options);
    const data = await getMovies.json();
    dispatch(addNowPlayingMovies(data.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};
export default useNowPlayingMovies;
