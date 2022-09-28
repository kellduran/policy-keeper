import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


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
            res.json().then(console.log(formData))
        }}).then(navigate('/'))
    }
    
    const navigate = useNavigate();
    
    return(
        <>
        <form onSubmit={handleSubmit}>
        <label htmlFor="username">Update Username:</label>
        <input
          id="username-signup-input"
          type="text"
          name="user_name"
          value={formData.user_name}
          onChange={handleChange}
        />
        <button>Update</button>
        </form>
        </>
    )
}

export default UpdateUser;