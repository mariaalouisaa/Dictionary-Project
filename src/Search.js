import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  const [keyword, setKeyword] = useState("");
  function handleSearch(event) {
    event.preventDefault();
    // API Documentation - https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function updateCity(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Search">
      <form onSubmit={handleSearch}>
        <input type="search" onChange={updateCity} />
        <input type="submit" value="SEARCH" />
      </form>
    </div>
  );
}
