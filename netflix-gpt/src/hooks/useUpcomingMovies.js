import { API_Options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {

    const dispatch = useDispatch();
    const url = "https://api.themoviedb.org/3/movie/upcoming";

    const getUpcomingMovies = async() => {
        const data = await fetch(url, API_Options);
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results));
    }

    useEffect(() => {
        getUpcomingMovies();
    },[])
}
export default useUpcomingMovies;