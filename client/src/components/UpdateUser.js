import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import theme from "../styled-comps/theme";
import StyledButton from "../styled-comps/StyledButton"
import StyledDiv from "../styled-comps/BackgroundStyle"

function UpdateUser({ currentUser, setCurrentUser }){
    const [formData, setFormData] = useState({
        user_name:"",
        user_email:`${currentUser.user_email}`,
        user_id:`${currentUser.id}`,
        confirmation_token:"",
        email_validated: true,
        is_admin: false
    })

    const { id } = currentUser

    function handleChange(e){
        setFormData({
            ...formData, [e.target.name]: e.target.value
    })
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch(`/users/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      }).then((res) => {
        if(res.ok) {
            res.json().then((json) => {
                setCurrentUser(json)
                navigate('/user')
            })
        }})
    }
    
    const navigate = useNavigate();
    
    return(
        <>
        <StyledDiv.UserBackground>
            <form onSubmit={ handleSubmit }>
                <label style={ { color: theme.bone } }htmlFor="username">Update Username: </   label>
                <input
                  id="username-signup-input"
                  type="text"
                  name="user_name"
                  value={ formData.user_name }
                  onChange={ handleChange }
                />
                <StyledButton>Update</StyledButton>
            </form>
            <Link to={'/user'}>
                <StyledButton>I've Changed My Mind</StyledButton>
            </Link>
        </StyledDiv.UserBackground>
        </>
    )
}

export default UpdateUser;