import React from "react";
// import { useNavigate } from "react-router-dom";
import StyledButton from "../styled-comps/StyledButton";
import StyledDiv from "../styled-comps/BackgroundStyle";


function FavoritePolicyCard({ favpolicy, setFavoritePolicies, id }){
    // const navigate = useNavigate();
   
    // console.log(favpolicy, "hello from favpolicycard") 
    function handleClick(e){
        console.log(favpolicy, " in FavPolicyCard")
       
        fetch(`favorites/${id}`, {
            method: "DELETE",
         }).then(() => {
         handleDeleteClick()
        })
    }

    function handleDeleteClick(){
        setFavoritePolicies( (oldPolicies) => {
            console.log(oldPolicies)
            const newPolicies = oldPolicies.filter((favorite) => {
                return favorite.policy.id !== favpolicy.id
            })
            console.log(newPolicies)
            return newPolicies
        } )
    }


    return(
        <>
        <StyledDiv.PolicyCardBackground key={favpolicy.law_citation}>
        <h2>State: {favpolicy.state}</h2>
        <h2>Law Citation: {favpolicy.law_citation} </h2>
        <h2>Title: {favpolicy.title} </h2>
        <h2>Title Description: {favpolicy.title_description} </h2>
        <h2>Summary: {favpolicy.summary} </h2>
        {/* <h2>Effective Date: {favpolicy.effective_date} </h2> */}
        <h2>Policy Type: {favpolicy.policy_type} </h2>
        <h2>Database Retrieved From: {favpolicy.database} </h2>
        <h2>Source: {favpolicy.source} </h2>
       <br/>
        <StyledButton.RemovePolicyButton onClick={handleClick}>Remove Policy</StyledButton.RemovePolicyButton>
        </StyledDiv.PolicyCardBackground>
        </>
    )
}

export default FavoritePolicyCard;