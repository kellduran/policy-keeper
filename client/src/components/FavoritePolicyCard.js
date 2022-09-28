import React from "react";

function FavoritePolicyCard({ favpolicy, currentUser }){
    console.log(favpolicy)

    //destroy!favorite on this card with remove button

    return(
        <>
        <div key={favpolicy.law_citation}>
        <h2>State:{favpolicy.state}</h2>
        <h2>Law Citation: {favpolicy.law_citation} </h2>
        <h2>Title: {favpolicy.title} </h2>
        <h2>Title Description: {favpolicy.title_description} </h2>
        <h2>Summary: {favpolicy.summary} </h2>
        {/* <h2>Effective Date: {favpolicy.effective_date} </h2> */}
        <h2>Policy Type: {favpolicy.policy_type} </h2>
        <h2>Database Retrieved From: {favpolicy.database} </h2>
        <h2>Source: {favpolicy.source} </h2>
        </div>
        <button>Remove</button> 
        </>
    )
}

export default FavoritePolicyCard;