import React from "react";
import PolicyCard from "./PolicyCard";


function PolicyList( { filteredPolicies, currentUser, handleClickCreate, favoritePolicies, errors } ){
    
    

    const displayPolicies = filteredPolicies.map((policy) => {
        return(
            <PolicyCard 
            key = { policy.id }
            currentUser = { currentUser }
            policy = { policy }
            handleClickCreate={ handleClickCreate }
            favoritePolicies= { favoritePolicies }
            errors={ errors }
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