import React, { useRef } from "react";
import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";
import openai from "../utils/openai";

const SearchBar = () => {

    const langKey = useSelector(store => store.appConfig.language);

    const searchText = useRef(null);

    const callGPTAPI = async() => {

        const gptQuery = "Act as a movie recommendation system and suggest some movies for the query : " + searchText.current.value + 
        ". ony give me name of 5 movies, comma separated like the example result given ahea. Example : Sholey, Dum, GOW";

        console.log(gptQuery);

        const gptResults = await openai.chat.completions.create({
            messages: [{role: 'user', content: gptQuery}],
            model: "gpt-3.5-turbo"
        });
        const data = gptResults.choices;
        console.log(data);
    }

  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
        <input
        ref={searchText}
          type="text"
          className="p-4 m-4 col-span-10"
          placeholder={lang[langKey].searchPlaceholder}
        ></input>
        <button className="bg-red-700 text-white m-4 rounded-lg py-2 px-4 col-span-2" onClick={callGPTAPI}>{lang[langKey].search}</button>
      </form>
    </div>
  );
};

export default SearchBar;
