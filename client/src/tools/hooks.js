import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

export const NavButton = ({ path = '/', text = "back" }) => {
    const navigate = useNavigate()
    console.log(path)

    return(
        <button onClick={ () => navigate( path )}>{ text }</button>
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
  const [currentUser, setCurrentUser] = useState()
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
          navigate('/')
          setCurrentUser("");
        })
  }

  return(
    <div>
        <button onClick={handleLogout} currentUser={ currentUser }>Logout</button>
        { errors && <div>{errors}</div>}  
    </div>
  )
}
