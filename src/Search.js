import React, { useState } from "react";

export default function Search() {
  const [keyword, setKeyword] = useState("");
  function getWord(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }

  function updateCity(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Search">
      <form onSubmit={getWord}>
        <input type="search" onChange={updateCity} />
        <input type="submit" value="SEARCH" />
      </form>
    </div>
  );
}
