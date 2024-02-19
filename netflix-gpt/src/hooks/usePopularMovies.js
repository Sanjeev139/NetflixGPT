import { API_Options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {

    const dispatch = useDispatch();

    const url = "https://api.themoviedb.org/3/movie/popular";

    const fetchPopularMovie = async () => {
        const data = await fetch(url, API_Options);
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
    }

    useEffect(() => {
        fetchPopularMovie();
    },[])
  
}

export default usePopularMovies;
