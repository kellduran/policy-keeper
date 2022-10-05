import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavButton } from "../tools/hooks"
import theme from "../styled-comps/theme";
import StyledButton from "../styled-comps/StyledButton";
import StyledDiv from "../styled-comps/BackgroundStyle";

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
    <StyledDiv.UserBackground>
      <h2 style={{color: theme.bone}}>Please Log In to Continue!</h2>
      <form onSubmit={handleSubmit}>
        <label style={{color: theme.bone }}htmlFor="username">Username: </label>
        <input
          id="username-signup-input"
          type="text"
          name="user_name"
          value={formData.user_name}
          onChange={handleChange}
        />
        <label style={{color: theme.bone }}htmlFor="password">Password: </label>
        <input
          id="password-signup-input"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <label style={{color: theme.bone }}htmlFor="confirm-password">Confirm Password: </  label>
        <input
          id="confirm-password-signup-input"
          type="password"
          name="confirm_password"
        />
        <StyledButton type="submit">Submit</StyledButton>
      </form>
      { errors && <div>{errors}</div> } 
      <NavButton path="/" text="Home" />
      <NavButton path="/user" text="My Page" />
      <NavButton path="/policy" text="Policies" />
    </StyledDiv.UserBackground>

        
  );
}

export default Login;