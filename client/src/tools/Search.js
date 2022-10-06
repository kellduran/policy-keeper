import React from "react";
import StyledForm from "../styled-comps/FormStyles"
import { Separator } from "../styled-comps/SeparatorSpan";

function Search({ changeSearchString }) {
  
  const styles ={
    fontFamily: 'Laila', 
    fontWeight: 400,
    fontSize: 28,
  }

  return (
    <div className="searchbar">
      <label style={ styles } htmlFor="search">Search Policies:</label>
      <Separator />
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