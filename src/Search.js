import React, { useState } from "react";
import axios from "axios";
import Definitions from "./Definition";
import "./Search.css";
import Pictures from "./Pictures";

export default function Search() {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState(null);
  const [photos, setPhotos] = useState(null);
  function handleSearch(event) {
    event.preventDefault();
    // API Documentation - https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    // API DOCS - https://www.pexels.com/api/documentation/
    let pexelsKey = `563492ad6f9170000100000136d956a9f87e49358e0570bce489ddd4`;
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

  function updateCity(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Search">
      <form onSubmit={handleSearch}>
        <input className="input" type="search" onChange={updateCity} />
      </form>
      <Definitions data={result} />
      <Pictures data={photos} />
    </div>
  );
}
