import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function FavoritePolicyCard({ favpolicy, currentUser }){
    const navigate = useNavigate();
    console.log(currentUser)
    const [policyDelete, setPolicyDelete] = useState({
        policy_id: ``
    })
    console.log(favpolicy, "hello from favpolicycard")
    // const { id } = favpolicy.id
 
    function handleClick(e){
        console.log(favpolicy, "YouClicked")
        
        console.log(favpolicy.id, "inside handleClick ID")
        fetch(`favorites/${favpolicy.id}`, {
            method: "DELETE",
         }).then(navigate('/'));
    }

    return(
        <>
        <div key={favpolicy.law_citation}>
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
        {/* <Link to={"/removepolicy"} policy_id={id}> */}
        <button onClick={ handleClick }>Remove Policy</button>
        {/* </ Link> */}
        </div>
        </>
    )
}

export default FavoritePolicyCard;