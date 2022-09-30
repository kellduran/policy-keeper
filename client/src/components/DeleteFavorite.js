import React from "react";
import { Link } from "react-router-dom";

function DeleteFavorite({ currentUser, setCurrentUser, favpolicy }){
    // const { id } = favpolicy
    // const navigate = useNavigate();

    // function handleDelete(){
    //     fetch(`favorite/${id}`, {
    //       method: "DELETE",
    //    }).then(navigate('/user'));
    //   }

    //   console.log("hello from deleteFavorite")      
    
      return(
        <div>
            <h2>Please Comfirm Removing Policy.</h2>
            <button >Done with This One</button>
            <br/>
            <Link to={'/'}>
            <button>I've Changed My Mind</button>
            </Link>
        </div>
    )
}

export default DeleteFavorite;