import React from "react";

function PolicyCard({ policy, currentUser }){
    // console.log(policy)
    return(
        <>
        <div key={policy.id}>
        <h2>State:{policy.state}</h2>
        <h2>Law Citation: {policy.law_citation} </h2>
        <h2>Title: {policy.title} </h2>
        <h2>Title Description: {policy.title_description} </h2>
        <h2>Summary: {policy.summary} </h2>
        {/* <h2>Effective Date: {policy.effective_date} </h2> */}
        <h2>Policy Type: {policy.policy_type} </h2>
        <h2>Database Retrieved From: {policy.database} </h2>
        <h2>Source: {policy.source} </h2>
        </div>
        <button>Keep</button>
        </>
    )
}

export default PolicyCard;