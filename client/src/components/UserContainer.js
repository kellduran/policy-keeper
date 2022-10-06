import React from "react";
import { NavButton } from "../tools/hooks";
import FavoritePolicyCard from "./FavoritePolicyCard";
import { Link } from 'react-router-dom';
import StyledButton from "../styled-comps/StyledButton";
import StyledDiv from "../styled-comps/BackgroundStyle";
import theme from "../styled-comps/theme";
import StyledSpan from "../styled-comps/SeparatorSpan";
import StyledH1 from "../styled-comps/TextElementStyle";
import NoteCard from "./NoteCard";



function UserContainer ({ currentUser, favoritePolicies, setFavoritePolicies, notes, setNotes }){
    
    const { id } = currentUser
    // console.log(id)
    
    console.log(notes, "from UserContainer")

    const myNotes = notes.map(( note ) => {
        console.log(note.body, "Note UserContainer")
        return (
            <NoteCard
            key= { note.id }
            body= { note.body }
            note= { note }
            />
        )
    })

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
        <StyledH1.Style3 style={{color: theme.bone }}>My Page</StyledH1.Style3>
         {/* <NavButton path="/logout" text="Logout" /> */}
         <NavButton path="/" text="Home" />
         <NavButton path="/policy" text="Policies" />
         
         </div>
        <StyledDiv.UserMyPageBackground>
            <div>
            <StyledH1.Style4>Username: {currentUser.user_name} </StyledH1.Style4>
            </div>
            <StyledSpan />
            <StyledH1.Style4>Email: {currentUser.user_email} </StyledH1.Style4>
            <StyledSpan />
            <br/>
            <Link to={`/user/${id}`}>
            <StyledButton.UpdateUserButton>Update My Information</ StyledButton.UpdateUserButton>
            </Link>
            <Link to={"/done"}>
            <StyledButton.UserDeleteButton>Delete My Account</ StyledButton.UserDeleteButton>
            </Link>
        </StyledDiv.UserMyPageBackground>
        <NoteCard />
        <StyledDiv>
         <StyledH1.Style4> My Saved Policies </StyledH1.Style4>   
         </StyledDiv>
        {displayFavoritePolicies}
        {myNotes}
       
        </>
    )
}

export default UserContainer;