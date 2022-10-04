import React from "react";
import { NavButton } from "../tools/hooks";
import FavoritePolicyCard from "./FavoritePolicyCard";
import { Link } from 'react-router-dom';
import StyledButton from "../styled-comps/StyledButton";
import StyledDiv from "../styled-comps/BackgroundStyle";
import theme from "../styled-comps/theme";



function UserContainer ({ currentUser, favoritePolicies, setFavoritePolicies }){
    
    const { id } = currentUser
    // console.log(id)
    
    // useEffect(() => {
    
    //     fetch(`/favorites/${id}`)
    //       .then((res) => res.json())
    //       .then((res)=>{
    //         console.log(res, "from favorites fetch usercontainer")
    //         setFavoritePolicies(res)
    //         }
    //         );
    // // eslint-disable-next-line react-hooks/exhaustive-deps    
    // }, []);


    // function handleDeleteClick(deletedFavPolicy){
    //     console.log(deletedFavPolicy, "Inside handleDeleteClick")
       
    //     const updatedFavoritePolicies = favoritePolicies.filter((policy) => favoritePolicies.favorites[0].id!== deletedFavPolicy)
        
    //     setFavoritePolicies(updatedFavoritePolicies)
    //     setUpdatePolicies(updatedFavoritePolicies)
        
    //     console.log(favoritePolicies, "Inside handleDeleteClick filter")
    //   }



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