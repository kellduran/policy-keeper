import React from "react";
import { useNavigate, Link } from "react-router-dom";
import StyledButton from "../styled-comps/StyledButton";
import StyledDiv from "../styled-comps/BackgroundStyle";

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
        <StyledDiv>
            <div>
            <h2>Please Comfirm Deleting Your Account and Associated Data. There is no turning back...</h2>
            </div>
            <br/>
            <StyledDiv>
            <StyledButton.DeleteButton onClick={ handleDelete }>DELETE</StyledButton.DeleteButton>
            <br/>
            <Link to={'/user'}>
            <StyledButton>I've Changed My Mind</StyledButton>
            </Link>
            </StyledDiv>
        </StyledDiv>
    )
}

export default DeleteUser;