import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavButton } from "../tools/hooks";

const SignupForm = ({ currentUser, setCurrentUser }) => {
    // eslint-disable-next-line no-unused-vars
    const [errors, setErrors] = useState([])
    
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
      
      const userCreds = { ...formData };
    //console.log("you clicked me", userCreds)
    fetch("/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userCreds),
      }).then((res) => {
        if (res.ok) {
          res.json().then((user) =>{
            currentUser = setCurrentUser(user)
            navigate('/')})
            .then(navigate('/'))
          } else {
          res.json().then((json) => 
            setErrors(json.errors)
          ).then(navigate('/'));
        }
      })
    }
  
    return (
      <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          id="username-signup-input"
          type="text"
          name="user_name"
          value={formData.user_name}
          onChange={handleChange}
        />
        <label htmlFor="email">Email:</label>
        <input
          id="email-signup-input"
          type="text"
          name="user_email"
          value={formData.user_email}
          onChange={handleChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password-signup-input"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <label htmlFor="confirm-password">Confirm Password:</label>
        <input
          id="confirm-password-signup-input"
          type="password"
          name="confirm-password"
        />
        <button type="submit">Submit</button>
      </form>

      <NavButton path="/" text="Home" />
       </>
    );
  };
  
  export default SignupForm;