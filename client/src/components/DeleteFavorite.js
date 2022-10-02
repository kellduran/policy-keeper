import React from "react";
import { Link, useNavigate } from "react-router-dom";

function DeleteFavorite({ currentUser,  favpolicy, handleDeleteClick, favPolicyRealID }){
    // const { id } = favpolicy
    const navigate = useNavigate();

    // function handleDelete(){
    //     fetch(`favorite/${favPolicyRealID}`, {
    //       method: "DELETE",
    //    }).then(navigate('/user'));
    //   }
      console.log(favpolicy,"DeleteFav-favpolicy object")  
      console.log(favPolicyRealID, " deleteFavorite, favPolicyRealID")  
      console.log(currentUser, "DeleteFav")  
      console.log(handleDeleteClick, "DeleteFav")
    
    function handleClick(e){
        console.log(favpolicy, "YouClicked")
        
        console.log(favPolicyRealID, "inside handleClick ID")
        // fetch(`favorites/${favpolicy.id}`, {
        //     method: "DELETE",
        //  }).then(handleDeleteClick(favpolicy.id))
        //  .then(navigate("/user"));
    }
    
      return(
        <div>
            <h2>Please Comfirm Removing Policy.</h2>
            <button onClick={ handleClick }>Done with This One</button>
            <br/>
            <Link to={'/'}>
            <button>I've Changed My Mind</button>
            </Link>
        </div>
    )
}

export default DeleteFavorite;