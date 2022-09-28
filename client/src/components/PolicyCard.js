import React, { useState } from "react";
import StyledDiv from "../styled-comps/BackgroundStyle";

function PolicyCard({ policy, currentUser }){
    const [newFavorite, setNewFavorite] = useState({
        user_id: "",
        policy_id: ""
    })

    const { id } = currentUser
    // console.log(id, "id from PolicyCard")
    
    function handleClick(e){
        e.preventDefault();

        console.log("ClickyClicky")

        // setNewFavorite({
        //     user_id: `${id}`,
        //     policy_id: `${policy.id}`
        // });
        // console.log(newFavorite, "consider me handled")
    }
    

    //create!favorite on this card with params filled in which is triggered by an onClick- consider adding validation so that you a user can't favorite the same policy 2x

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
        </div>
        <br/>
        </>
    )
}

export default PolicyCard;