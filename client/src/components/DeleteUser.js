import React from "react";
import { useNavigate, Link } from "react-router-dom";

function DeleteUser({ currentUser, setCurrentUser }){
    const { id } = currentUser
    const navigate = useNavigate();
    //put in rest of destroy user
    function handleDelete(){
        fetch(`users/${id}`, {
          method: "DELETE",
       })
         .then(setCurrentUser(""))
         .then(navigate('/'));
      }

    return(
        <div>
            <h2>Please Comfirm Deleting Your Account and Associated Data. There is no turning back...</h2>
            <button onClick={ handleDelete }>DELETE</button>
            <br/>
            <Link to={'/'}>
            <button>I've Changed My Mind</button>
            </Link>
        </div>
    )
}

export default DeleteUser;