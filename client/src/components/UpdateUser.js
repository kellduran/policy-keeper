import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import theme from "../styled-comps/theme";
import StyledButton from "../styled-comps/StyledButton"
import StyledDiv from "../styled-comps/BackgroundStyle"
import StyledForm from "../styled-comps/FormStyles"

function UpdateUser({ currentUser, setCurrentUser }){
    const [formData, setFormData] = useState({
        user_name:"",
        user_email:`${currentUser.user_email}`,
        user_id:`${currentUser.id}`,
        confirmation_token:"",
        email_validated: true,
        is_admin: false
    })

    const [errors, setErrors] = useState ([])

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
          Accept: 'application/json',  
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      }).then((res) => {
        
        if(res.ok) {
            res.json().then((json) => {
                
                setCurrentUser(json)
                navigate('/user')
            })
        } else {
            res.json().then( (data) => {
                setErrors(data.errors)
            }  )
        }
        })
    }
    
    const navigate = useNavigate();
    
    return(
        <>
        <StyledDiv.UserUpdateBackground>
            <StyledForm onSubmit={ handleSubmit }>
                <label style={ { fontFamily: "Laila", color: theme.bone } }htmlFor="username">Update Username: </   label>
                <StyledForm.InputUpdateUser
                  id="username-signup-input"
                  type="text"
                  name="user_name"
                  value={ formData.user_name }
                  onChange={ handleChange }
                />
                <div>
                <StyledButton>Update</StyledButton>
                </div>
            </StyledForm>
            <div>
            { errors ? errors.map( (error) => <StyledDiv.UserUpdateErrorBackground>{ error }</StyledDiv.UserUpdateErrorBackground> ) : null }
            </div>
            <StyledDiv.UserUpdateNavBackground>
            <Link to={'/user'}>
                <StyledButton.ChangedMindButton>I've Changed My Mind</StyledButton.ChangedMindButton>
            </Link>
            </StyledDiv.UserUpdateNavBackground>
        </StyledDiv.UserUpdateBackground>
        </>
    )
}

export default UpdateUser;