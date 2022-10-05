import React from "react";
import StyledForm from "../styled-comps/FormStyles"

function Search({ changeSearchString }) {
  
  
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Policies:</label>
      <StyledForm.Input
        type="text"
        id="search"
        placeholder="Type to search..."
        onChange={(e) => changeSearchString( e.target.value )}
      />
    </div>
  );
}

export default Search;