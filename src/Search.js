import React, { useState } from "react";
import axios from "axios";
import Definitions from "./Definition";
import "./Search.css";

export default function Search() {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState(null);
  function handleSearch(event) {
    event.preventDefault();
    // API Documentation - https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
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
    </div>
  );
}
