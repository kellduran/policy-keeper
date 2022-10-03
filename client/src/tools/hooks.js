import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import StyledButton from "../styled-comps/StyledButton";


export const NavButton = ({ path = '/', text = "back" }) => {
    const navigate = useNavigate()
    

    return(
        <StyledButton onClick={ () => navigate( path )}>{ text }</StyledButton>
    )
}

export const AuthRoute = ({ children, setCurrentUser }) => {
    const navigate = useNavigate()
    console.log(children, "CHILDREN FROM AUTHROUTE")
    useEffect(() => {
        fetch("/me").then((res) => {
          if (res.ok) {
            res.json().then((user) => {
              setCurrentUser(user);
              
            });
          } else {
            navigate('/login')
          }
        })
      // eslint-disable-next-line react-hooks/exhaustive-deps
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

