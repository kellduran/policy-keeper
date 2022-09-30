import React from "react";
import PolicyCard from "./PolicyCard";


function PolicyList({filteredPolicies, currentUser}){
    
    console.log(filteredPolicies, "from policy list")
    console.log(currentUser, "from policy list")

    const displayPolicies = filteredPolicies.map((policy) => {
        return(
            <PolicyCard 
            key = {policy.id}
            currentUser = { currentUser }
            policy = { policy }
            />
        )
    })
    
    
    return(
        <div>
            {displayPolicies}
        </div>
    )
}

export default PolicyList;