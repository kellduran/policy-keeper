import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import StyledButton from "../styled-comps/StyledButton";


export const NavButton = ({ path = '/', text = "back" }) => {
    const navigate = useNavigate()
    

    return(
        <StyledButton onClick={ () => navigate( path )}>{ text }</StyledButton>
    )
}

export const AuthRoute = ({ children, setCurrentUser, currentUser }) => {
    const navigate = useNavigate()

    useEffect(() => {
        fetch("/me").then((res) => {
          if (res.ok) {
            res.json().then((user) => {
              setCurrentUser(user);
              console.log(currentUser.id, "From AuthRoute")
            });
          } else {
            navigate('/login')
          }
        })
      }, [])

    return (
        <>
            {children}
        </>
    )
}

export const Logout = ( ) => {
  const [errors, setErrors] = useState(null)
  const navigate = useNavigate()

  const handleLogout = () => {
    fetch('/logout', {method: "DELETE"})
    .then(res => {
          if (!res.ok) {
            throw Error('Error could not complete request')
        }})
        .catch(error => {
          setErrors(error.message)
        }).then(()=>{
          navigate('/');
        })
  }

  return(
    <div>
        <StyledButton onClick={handleLogout} >Logout</StyledButton>
        { errors && <div>{errors}</div>}  
    </div>
  )
}
