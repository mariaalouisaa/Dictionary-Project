import React, { useState, useEffect } from "react";
import axios from "axios";
import Definitions from "./Definition";
import "./Search.css";
import Pictures from "./Pictures";

export default function Search() {
  const [keyword, setKeyword] = useState(null);
  const [result, setResult] = useState(null);
  const [photos, setPhotos] = useState(null);
  const [synonym, setSynonym] = useState(null);
  const getSynonym = (value) => {
    setSynonym(value);
  };

  useEffect(() => {
    if (synonym) {
      setSynonym(synonym);
      let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${synonym}`;
      axios.get(apiUrl).then(handleResponse);
      //old key = `563492ad6f9170000100000136d956a9f87e49358e0570bce489ddd4`;
      let pexelsKey = `563492ad6f917000010000012ad078d7f9ad403eb9d6be008686c6b5`;
      let pexelsUrl = `https://api.pexels.com/v1/search?query=${synonym}&per_page=9`;
      let header = { Authorization: `Bearer ${pexelsKey}` };
      axios.get(pexelsUrl, { headers: header }).then(handlePexelsResponse);
    }
  }, [synonym]);

  function handleSearch(event) {
    event.preventDefault();
    // API Documentation - https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    // API DOCS - https://www.pexels.com/api/documentation/
    //old key = `563492ad6f9170000100000136d956a9f87e49358e0570bce489ddd4`;
    let pexelsKey = `563492ad6f917000010000012ad078d7f9ad403eb9d6be008686c6b5`;
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let header = { Authorization: `Bearer ${pexelsKey}` };
    axios.get(pexelsUrl, { headers: header }).then(handlePexelsResponse);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function handleResponse(response) {
    setResult(response.data[0]);
  }

  function updateWord(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Search">
      <form onSubmit={handleSearch}>
        <label className="formlabel">
          What word do you want to look up?
          <input
            className="input"
            type="search"
            name="search"
            onChange={updateWord}
          />
        </label>
      </form>
      <Definitions data={result} getSynonym={getSynonym} />
      <Pictures data={photos} />
    </div>
  );
}
