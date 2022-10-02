import React from "react";
import FavoritePolicyCard from "./FavoritePolicyCard";

function FavoritePolicyList({favoritePolicies, currentUser, handleDeleteClick}){

    const displayFavoritePolicies = favoritePolicies.map((favpolicy)=> {
        console.log(favpolicy)
        return(
            <FavoritePolicyCard 
            key = {favpolicy.id}
            currentUser = { currentUser }
            favpolicy = { favpolicy }
            id = {favpolicy.id}
            handleDeleteClick = {handleDeleteClick}
            />
        )

    })

    return(
        <>
        {displayFavoritePolicies}
        </>
    )
}

export default FavoritePolicyList;