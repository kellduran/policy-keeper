import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';

export const NavButton = ({ path = '/', text = "back" }) => {
    const navigate = useNavigate()

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
              console.log(currentUser.id)
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