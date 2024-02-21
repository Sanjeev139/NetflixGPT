import React from "react";
import SearchBar from "./SearchBar";
import MoviesSuggestion from "./MoviesSuggestion";
import { BG_IMAGE_URL } from "../utils/constant";

const Search = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img
          src={BG_IMAGE_URL}
          alt="cover-page"
        ></img>
      </div>
      <SearchBar></SearchBar>
      <MoviesSuggestion></MoviesSuggestion>
    </div>
  );
};

export default Search;
