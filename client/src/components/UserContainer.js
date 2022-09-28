import React, { useState, useEffect} from "react";
import { NavButton } from "../tools/hooks";
import FavoritePolicyCard from "./FavoritePolicyCard";
import { Link } from 'react-router-dom';
import StyledButton from "../styled-comps/StyledButton";
import StyledDiv from "../styled-comps/BackgroundStyle";
import theme from "../styled-comps/theme";


function UserContainer ({setCurrentUser, currentUser }){
    
    //update!user on this component: user_name; use PATCH
    const [favoritePolicies, setFavoritePolicies] = useState([])
    

    console.log (currentUser.id, "userContainer currentUser.id")
    const { id } = currentUser
    console.log(id)
    
    useEffect(() => {
        fetch(`/favorites/${id}`)
          .then((res) => res.json())
          .then((res)=>{
            console.log(res, "from favorites fetch usercontainer")
            setFavoritePolicies(res)
            }
            );
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const displayFavoritePolicies = favoritePolicies.map((favpolicy)=> {
        console.log(favpolicy)
        return(
            <FavoritePolicyCard 
            key = {favoritePolicies.law_citation}
            currentUser = { currentUser }
            favpolicy = { favpolicy }
            id = {favpolicy.id}
            />
        )

    })

    console.log(favoritePolicies)
   

    return (
        <>
        <div>
        <h1 style={{color: theme.bone }}>My Page</h1>
         <NavButton path="/logout" text="Logout" />
         <NavButton path="/" text="Home" />
         <NavButton path="/policy" text="Policies" />
         </div>
        <StyledDiv.UserBackground>
            <h2>Username: {currentUser.user_name} </h2>
            <h2>Email: {currentUser.user_email} </h2>
            <br/>
            <Link to={`/user/${id}`}>
            <StyledButton>Update My Information</ StyledButton>
            </Link>
            <Link to={"/done"}>
            <StyledButton>Delete My Account</ StyledButton>
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