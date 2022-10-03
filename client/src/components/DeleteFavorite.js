import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FP_ID } from "../tools/FavPolContext";



function DeleteFavorite({ currentUser,  favpolicy, handleDeleteClick, favPolicyRealID }){
    const { value } = useContext(FP_ID)
    const navigate = useNavigate();


    // function handleDelete(){
    //     fetch(`favorite/${favPolicyRealID}`, {
    //       method: "DELETE",
    //    }).then(navigate('/user'));
    //   }
       
       
      console.log(currentUser, "DeleteFav")  
      
    function handleClick(e){
        console.log(favpolicy, "YouClicked")
        console.log(handleDeleteClick, "DeleteFav inside handleClick")
    
        console.log(value, "inside handleClick Delete Fav value")
        // fetch(`favorites/${favpolicy.id}`, {
        //     method: "DELETE",
        //  }).then(handleDeleteClick(value))
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