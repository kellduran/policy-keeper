import React from "react";
import PolicyCard from "./PolicyCard";


function PolicyList( { filteredPolicies, currentUser, handleClickCreate } ){
    
    // console.log(filteredPolicies, "from policy list")
    // console.log(currentUser, "from policy list")

    const displayPolicies = filteredPolicies.map((policy) => {
        return(
            <PolicyCard 
            key = { policy.id }
            currentUser = { currentUser }
            policy = { policy }
            handleClickCreate={ handleClickCreate }
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