import React from "react";
// import { useNavigate } from "react-router-dom";
import StyledButton from "../styled-comps/StyledButton";
import StyledDiv from "../styled-comps/BackgroundStyle";

function FavoritePolicyCard({ favpolicy, currentUser, handleDeleteClick }){
    // const navigate = useNavigate();
    

    // const [favoritePolicies, setFavoritePolicies] = useState([])
   
    // console.log(favpolicy, "hello from favpolicycard")
    // const { id } = favpolicy.id
 
    function handleClick(e){
        console.log(favpolicy, "YouClicked")
        
        console.log(favpolicy.id, "inside handleClick ID")
        fetch(`favorites/${favpolicy.id}`, {
            method: "DELETE",
         }).then(handleDeleteClick(favpolicy.id));
    }


    //moved to userContainer so that could pass updated favpolicy
    // function handleDeleteClick(deletedFavPolicy){
    //     console.log(deletedFavPolicy)
    //     const updatedFavoritePolicies = favoritePolicies.filter((policy) => policy.id !== deletedFavPolicy.id)
    //     setFavoritePolicies(updatedFavoritePolicies)
    //   }

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
        <StyledButton onClick={ handleClick }>Remove Policy</StyledButton>
        {/* </ Link> */}
        </StyledDiv>
        </>
    )
}

export default FavoritePolicyCard;