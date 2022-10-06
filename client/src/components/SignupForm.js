import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavButton } from "../tools/hooks";
import theme from "../styled-comps/theme";
import StyledButton from "../styled-comps/StyledButton";
import StyledDiv from "../styled-comps/BackgroundStyle";
import StyledForm from "../styled-comps/FormStyles"
import StyledH1 from "../styled-comps/TextElementStyle"



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
      <StyledDiv.UserSignUpBackground>
        <div>
        <StyledH1.Style3 style={{color: theme.bone }}>Please Sign Up!</StyledH1.Style3>
        </div>
        <br/>
        <StyledForm onSubmit={handleSubmit}>
          <label style={ { fontFamily: "Laila",color: theme.bone } }htmlFor="username">Username:</label>
          <StyledForm.InputSignUp
            id="username-signup-input"
            type="text"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
          />
          <label style={ { fontFamily: "Laila",color: theme.bone } } htmlFor="email">Email:</label>
          <StyledForm.InputSignUp
            id="email-signup-input"
            type="text"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
          />
          <label style={ { fontFamily: "Laila",color: theme.bone } }htmlFor="password">Password:</label>
          <StyledForm.InputSignUp
            id="password-signup-input"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <label style={ { fontFamily: "Laila",color: theme.bone } }htmlFor="confirm-password">Confirm   Password:</ label>
          <StyledForm.InputSignUp
            id="confirm-password-signup-input"
            type="password"
            name="confirm-password"
          />
          <div>
          <StyledButton type="submit">Submit</StyledButton>
          </div>
        </StyledForm>
        <div>
        <NavButton path="/" text="Home" />
        { errors ? errors.map( (error) => <div>{ error }</div> ) : null }
        { welcome ? <div>Welcome! Please click on the confirmation token in your email before attempting to login.</div>  : null }
        </div>
      </StyledDiv.UserSignUpBackground>
      
    </>
  );
};
  
  export default SignupForm;