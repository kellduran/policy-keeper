import React from "react";
import StyledButton from "../styled-comps/StyledButton";

function PolicyCard({ policy, currentUser, handleClickCreate }){

  //state for toggle button on save use handleClick to set here 
  // const [saved, setSaved] = useState(true)
    
  function handleClick(e){
    e.preventDefault();

    const favoriteBody={favorite:{ policy_id: policy.id }} 
 
    handleClickCreate(favoriteBody)
    // setSaved(false)  

  }
    

  return(
    <>
      <div  key={policy.id}>
        <h2>State: {policy.state}</h2>
        <h2>Law Citation: {policy.law_citation} </h2>
        <h2>Title: {policy.title} </h2>
        <h2>Title Description: {policy.title_description} </h2>
        <h2>Summary: {policy.summary} </h2>
        {/* <h2>Effective Date: {policy.effective_date} </h2> */}
        <h2>Policy Type: {policy.policy_type} </h2>
        <h2>Database Retrieved From: {policy.database} </h2>
        <h2>Source: {policy.source} </h2>
        {/* { saved ?
        <StyledButton onClick={handleClick}>Keep!</StyledButton> : <h2> Already Saved </  h2>} */}
        <StyledButton onClick={handleClick}>Keep!</StyledButton> 
        <br/>
      </div>
    </>
  )
}

export default PolicyCard;