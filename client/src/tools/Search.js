import React from "react";
import StyledForm from "../styled-comps/FormStyles"
import StyledSpan from "../styled-comps/SeparatorSpan";
import StyledDiv from "../styled-comps/BackgroundStyle"

function Search({ changeSearchString }) {
  
  const styles ={
    fontFamily: 'Laila', 
    fontWeight: 400,
    fontSize: 28,
  }

  return (
    <StyledDiv className="searchbar">
      <label style={ styles } htmlFor="search">Search Policies:</label>
      <StyledSpan />
      <StyledForm.Input
        type="text"
        id="search"
        placeholder="Type to search..."
        onChange={(e) => changeSearchString( e.target.value )}
      />
    </StyledDiv>
  );
}

export default Search;