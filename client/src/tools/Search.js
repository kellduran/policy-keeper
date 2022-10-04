import React from "react";

function Search({ changeSearchString }) {
  
  
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Policies:</label>
      <input
        type="text"
        id="search"
        placeholder="Type to search..."
        onChange={(e) => changeSearchString( e.target.value )}
      />
    </div>
  );
}

export default Search;