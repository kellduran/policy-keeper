import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { NotFound } from './components/landings';
import { AuthRoute } from './tools/hooks';

import Home from './components/Home';
import SignupForm from './components/SignupForm';
import Login from './components/Login';
import UserContainer from './components/UserContainer.js';
import PolicyContainer from './components/PolicyContainer';
import UpdateUser from './components/UpdateUser';
import DeleteUser from './components/DeleteUser';



import './index.css';


function App() {
  const [favoritePolicies, setFavoritePolicies] = useState([])
  const [currentUser, setCurrentUser] = useState("");
  const [errors, setErrors] = useState([])
  const [notes, setNotes] = useState([])
  
  


  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          // console.log(user.notes)
          setCurrentUser(user);
          setFavoritePolicies(user.favorites)
          setNotes(user.notes)
        });
      }
    })
  }, [])

  function handleClickCreate(favoriteBody){    

    fetch("/favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(favoriteBody)
    })
      .then((res) => {  
        console.log(res.status)
        if (res.ok) {
          res.json().then((json) => {
            console.log(json, "INSIDE POST RES APP.JS")
            setFavoritePolicies([...favoritePolicies, json])
          })
        } else {
          res.json().then((json) => {
            console.log(json)
            setErrors(json)
          })
        }
      })
  }
  


  // console.log(currentUser.id, "From App")

  return (
    <>
      <Routes>
        <Route path="/" element={ <Home /> } />

        <Route path="/login" element={ <Login setCurrentUser= { setCurrentUser }   currentUser={ currentUser } setFavoritePolicies={setFavoritePolicies}/> } />

        <Route path="/signup" element={ <SignupForm setCurrentUser= { setCurrentUser } currentUser={ currentUser }/> } />

        <Route path="/policy" element= { <AuthRoute setCurrentUser= {   setCurrentUser } currentUser={ currentUser }><PolicyContainer   setCurrentUser= { setCurrentUser}  currentUser={ currentUser} handleClickCreate={handleClickCreate} favoritePolicies= { favoritePolicies } errors={ errors }/></AuthRoute> } />

      { currentUser && <Route path="/user" element= { <AuthRoute setCurrentUser={   setCurrentUser }><UserContainer currentUser={ currentUser } favoritePolicies={ favoritePolicies } setFavoritePolicies={ setFavoritePolicies } notes={ notes } setNotes={ setNotes }/></AuthRoute> } /> }

        <Route path="/user/:id" element= { <AuthRoute setCurrentUser={   setCurrentUser } ><UpdateUser setCurrentUser= {  setCurrentUser}  currentUser={ currentUser} /></AuthRoute> } />

        <Route path="/done" element= { <AuthRoute setCurrentUser={   setCurrentUser } currentUser={ currentUser }><DeleteUser setCurrentUser= {  setCurrentUser }  currentUser={ currentUser } /></AuthRoute> } />

        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </>
  );
}

export default App;
