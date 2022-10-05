import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavButton } from "../tools/hooks";
import theme from "../styled-comps/theme";
import StyledButton from "../styled-comps/StyledButton";
import StyledDiv from "../styled-comps/BackgroundStyle";



const SignupForm = ({ currentUser, setCurrentUser }) => {
  
  const [errors, setErrors] = useState([])
  const [welcome, setWelcome] = useState(false)
    
  const [formData, setFormData] = useState({
    user_name: "",
    password: "",
    user_email: "",
    email_validated: false,
    is_admin: false,
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
    
    const userCreds = { user: {...formData} };
  
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCreds),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) =>{
          setCurrentUser(user)
          setWelcome(true)
          // navigate('/')
        })
        } else {
        res.json().then((json) => {
          setErrors(json)
        }
        );
      }
    })
  }
  
  return (
    <>
      <StyledDiv.UserBackground>
        <h2 style={{color: theme.bone }}>Please Sign Up!</h2>
        <br/>
        <form onSubmit={handleSubmit}>
          <label style={ { color: theme.bone } }htmlFor="username">Username:</label>
          <input
            id="username-signup-input"
            type="text"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
          />
          <label style={ { color: theme.bone } } htmlFor="email">Email:</label>
          <input
            id="email-signup-input"
            type="text"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
          />
          <label style={ { color: theme.bone } }htmlFor="password">Password:</label>
          <input
            id="password-signup-input"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <label style={ { color: theme.bone } }htmlFor="confirm-password">Confirm   Password:</ label>
          <input
            id="confirm-password-signup-input"
            type="password"
            name="confirm-password"
          />
          <StyledButton type="submit">Submit</StyledButton>
        </form>
        
        <NavButton path="/" text="Home" />
        { errors ? errors.map( (error) => <div>{ error }</div> ) : null }
        { welcome ? <div>Welcome! Please click on the confirmation token in your email before attempting to login.</div>  : null }
      </StyledDiv.UserBackground>
      
    </>
  );
};
  
  export default SignupForm;