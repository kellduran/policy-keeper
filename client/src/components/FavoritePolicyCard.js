import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import StyledButton from "../styled-comps/StyledButton";
import StyledDiv from "../styled-comps/BackgroundStyle";
import DeleteFavorite from "./DeleteFavorite";

function FavoritePolicyCard({ favpolicy, setFavoritePolicies, id }){
    const navigate = useNavigate();
    // const favPolicyRealID = favpolicy.favorites[0].id

    // const [favoritePolicies, setFavoritePolicies] = useState([favpolicy])
   
    // console.log(favpolicy, "hello from favpolicycard")
    // const { id } = favpolicy.id
    
    function handleClick(e){
        console.log( "YouClicked")
        console.log(favpolicy, " in FavPolicyCard")
       
        fetch(`favorites/${id}`, {
            method: "DELETE",
         }).then(()=>{
         handleDeleteClick();
        //  navigate("/policy")
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

    // function showDelete(e){
    //     console.log(favpolicy,"inside showDelete")
    //     console.log(favpolicy.favorites[0].id,"inside showDelete")
    //     console.log(favPolicyRealID,"FavPolicyRealID inside showDelete")
    //     console.log(currentUser,"inside showDelete")
    //     console.log(handleDeleteClick,"inside showDelete")
    //     // navigate("/removepolicy")
    //     return(
    //         <DeleteFavorite favpolicy={ favpolicy } currentUser={ currentUser }
    //         handleDeleteClick={ handleDeleteClick }
    //         favPolicyRealID={favPolicyRealID}/>
    //     )
    // }

    return(
        <>
        <StyledDiv key={favpolicy.law_citation}>
        {/* <h2>Favorite Policies:</h2> */}
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
        {/* <Link to={"/removepolicy"} > */}
        <StyledButton onClick={handleClick}>Remove Policy</StyledButton>
        {/* </ Link> */}
        </StyledDiv>
        
        </>
    )
}

export default FavoritePolicyCard;