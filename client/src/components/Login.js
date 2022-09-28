import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContainer from "./UserContainer";
import { NavButton } from "../tools/hooks"
import theme from "../styled-comps/theme";
import StyledButton from "../styled-comps/StyledButton";
import StyledDiv from "../styled-comps/BackgroundStyle";

function Login({ setCurrentUser, currentUser }){
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
        //console.log("you clicked me", userCreds)
        
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userCreds),
          }).then((res) => {
            if (res.ok) {
            res.json().then((user) => 
            {
              currentUser = setCurrentUser(user)
              console.log(user)
            }).then(navigate('/'));
          } else {
            res.json().then((json) =>
            setErrors(json.errors)
            ).then(navigate('/'));
          }
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
        <label style={{color: theme.bone }}htmlFor="confirm-password">Confirm Password: </label>
        <input
          id="confirm-password-signup-input"
          type="password"
          name="confirm-password"
        />
        <StyledButton type="submit">Submit</StyledButton>
      </form>
      <NavButton path="/" text="Home" />
        </StyledDiv.UserBackground>

        
    );
}

export default Login;