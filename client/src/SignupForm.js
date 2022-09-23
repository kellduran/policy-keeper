import React, { useState } from "react";

const SignupForm = ({ setCurrentUser }) => {
    const [errors, setErrors] = useState([])
    
    const [formData, setFormData] = useState({
      user_name: "",
      password: "",
      user_email: "",
    });
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
    function handleSubmit(e) {
      e.preventDefault();
       
      
      const userCreds = { ...formData };
    //   console.log("you clicked me", userCreds)
      fetch("/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userCreds),
      }).then((res) => {
        if (res.ok) {
          res.json().then((user) => {
            setCurrentUser(user)
          });
        } else {
          res.json().then((json) => 
            setErrors(json.errors)
          );
        }
      }).then(e.target.reset());;
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
       {errors?errors.map(e => <div>{e[0]+': ' + e[1]}</div>):null}
       </>
    );
  };
  
  export default SignupForm;