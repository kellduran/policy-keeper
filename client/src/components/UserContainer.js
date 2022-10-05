import React from "react";
import { NavButton } from "../tools/hooks";
import FavoritePolicyCard from "./FavoritePolicyCard";
import { Link } from 'react-router-dom';
import StyledButton from "../styled-comps/StyledButton";
import StyledDiv from "../styled-comps/BackgroundStyle";
import theme from "../styled-comps/theme";
import { Separator } from "../styled-comps/SeparatorSpan";



function UserContainer ({ currentUser, favoritePolicies, setFavoritePolicies }){
    
    const { id } = currentUser
    // console.log(id)
    

    const displayFavoritePolicies = favoritePolicies.map((favpolicy)=> {
        console.log(favpolicy)
        return(
            <FavoritePolicyCard 
            key = { favpolicy.favorite_id }
            favpolicy = { favpolicy.policy }
            id = { favpolicy.favorite_id }
            setFavoritePolicies = { setFavoritePolicies }
            />
        )

    })

    console.log(favoritePolicies, "fav policies userContainer")
   

    return (
        <>
        <div>
        <h1 style={{color: theme.bone }}>My Page</h1>
         {/* <NavButton path="/logout" text="Logout" /> */}
         <NavButton path="/" text="Home" />
         <NavButton path="/policy" text="Policies" />
         </div>
        <StyledDiv.UserBackground>
            <Separator />
            <h2>Username: {currentUser.user_name} </h2>
            <Separator />
            <h2>Email: {currentUser.user_email} </h2>
            <Separator />
            <br/>
            <Link to={`/user/${id}`}>
            <StyledButton.UpdatePolicyButton>Update My Information</ StyledButton.UpdatePolicyButton>
            </Link>
            <Link to={"/done"}>
            <StyledButton.UserDeleteButton>Delete My Account</ StyledButton.UserDeleteButton>
            </Link>
        </StyledDiv.UserBackground>
        <StyledDiv>
         <h2> My Policies </h2>   
         </StyledDiv>
        {displayFavoritePolicies}
       
        </>
    )
}

export default UserContainer;