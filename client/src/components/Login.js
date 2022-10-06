import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavButton } from "../tools/hooks"
import theme from "../styled-comps/theme";
import StyledButton from "../styled-comps/StyledButton";
import StyledDiv from "../styled-comps/BackgroundStyle";
import StyledH1 from "../styled-comps/TextElementStyle"
import StyledForm from "../styled-comps/FormStyles"
import StyledSpan from "../styled-comps/SeparatorSpan"

function Login({ setCurrentUser, currentUser, setFavoritePolicies }){
    // eslint-disable-next-line no-unused-vars
  const [errors, setErrors] = useState([])
    
  const [formData, setFormData] = useState({
    user_name: "",
    password: "",
  });
      
   
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  };
  
  const navigate = useNavigate();
  
  function handleSubmit(e) {
    e.preventDefault();
    
    const userCreds = { ...formData };
    
    fetch("/login", {
      method: "POST",
      headers: {
        Accept: 'apllication/json',
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCreds),
      }).then((res) => {
        if (!res.ok){
          throw Error('Invalid Username or Password')
        }})
        .catch(error => {
          setErrors(error.message)
        }).then((res) => {
          if (res === 200){
          res.json().then((user) => {
            setCurrentUser(user)
            setFavoritePolicies(user.favorites)
          })
        }}).then(() => {
          setFormData( {
          user_name: "",
          password: "",
          } )
        })
  }

  return(
    <StyledDiv.UserSignInBackground>
      <div>
        <StyledH1.Style3 style={{color: theme.bone}}>Please Log In to Continue!</StyledH1.Style3>
      </div>
      <StyledForm onSubmit={handleSubmit}>
        <label style={{fontFamily: "Laila", color: theme.bone }}htmlFor="username">Username: </label>
        <StyledForm.InputSignUp
          id="username-signup-input"
          type="text"
          name="user_name"
          value={formData.user_name}
          onChange={handleChange}
        />
        <label style={{fontFamily: "Laila", color: theme.bone }}htmlFor="password">Password: </label>
        <StyledForm.InputSignUp
          id="password-signup-input"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <label style={{fontFamily: "Laila", color: theme.bone }}htmlFor="confirm-password">Confirm Password: </  label>
        <StyledForm.InputSignUp
          id="confirm-password-signup-input"
          type="password"
          name="confirm_password"
        />
        <div>
        <StyledButton type="submit">Submit</StyledButton>
        </div>
      </StyledForm>
      <StyledDiv.UserSignInErrorNavBackground>
      { errors && <div>{errors}</div> } 
      <NavButton path="/" text="Home" />
      <StyledSpan.Medium />
      <NavButton path="/user" text="My Page" />
      <StyledSpan.Medium />
      <NavButton path="/policy" text="Policies" />
      </StyledDiv.UserSignInErrorNavBackground>
    </StyledDiv.UserSignInBackground>

        
  );
}

export default Login;