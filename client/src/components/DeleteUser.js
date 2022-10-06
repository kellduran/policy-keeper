import React from "react";
import { useNavigate, Link } from "react-router-dom";
import StyledButton from "../styled-comps/StyledButton";
import StyledDiv from "../styled-comps/BackgroundStyle";
import StyledSpan from "../styled-comps/SeparatorSpan"

function DeleteUser({ currentUser, setCurrentUser }){
    const { id } = currentUser
    const navigate = useNavigate();
    //put in rest of destroy user
    function handleDelete(){
        fetch(`users/${id}`, {
          method: "DELETE"
       })
         .then(() => {
            setCurrentUser("")
            navigate('/')
         })
      }

    return(
        <StyledDiv.DeleteUserBackground>
            <div>
            <h2>Please Comfirm Deleting Your Account and Associated Data. There is no turning back...</h2>
            </div>
            <br/>
            <div>
            <StyledButton.DeleteButton onClick={ handleDelete }>DELETE</StyledButton.DeleteButton>
            </div>
            <StyledDiv.UserDeleteChangedMindBackground>           
            <Link to={'/user'}>
            <StyledButton.ChangedMindButton>I've Changed My Mind</StyledButton.ChangedMindButton>
            </Link>
            </StyledDiv.UserDeleteChangedMindBackground>
        </StyledDiv.DeleteUserBackground>
    )
}

export default DeleteUser;