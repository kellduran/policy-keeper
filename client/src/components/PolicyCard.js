import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StyledButton from "../styled-comps/StyledButton";

function PolicyCard({ policy, currentUser, handleClickCreate }){

    const navigate = useNavigate();
    
    // eslint-disable-next-line no-unused-vars
    const [errors, setErrors] = useState([])
    //state for toggle button on save use handleClick to set here 
  // const [saved, setSaved] = useState(true)
    
    function handleClick(e){
      e.preventDefault();

      


      const favoriteBody={favorite:{ policy_id: policy.id }} 

      
      handleClickCreate(favoriteBody)
      // setSaved(false)  


      // fetch("/favorites", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(favoriteBody),
      //   })
      //   .then((res) => {
      //     if (res.ok) {
      //       res.json()
      //     .then(() => navigate('/user'))
      //     } else {
      //       res.json()
      //       .then((json) => {
      //         setErrors(json.errors)
      //         navigate('/')
      //       })
      //     }
      //   })
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
       <StyledButton onClick={handleClick}>Keep!</StyledButton> : <h2> Already Saved </h2>} */}
       <StyledButton onClick={handleClick}>Keep!</StyledButton> 
        <br/>
        </div>
      </>
    )
}

export default PolicyCard;