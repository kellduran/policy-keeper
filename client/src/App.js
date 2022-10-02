import React, { useState, useEffect } from 'react';
import { Routes, Route} from 'react-router-dom';
import { NotFound } from './components/landings';
import { AuthRoute } from './tools/hooks';

import Home from './components/Home';
import SignupForm from './components/SignupForm';
import Login from './components/Login';
import UserContainer from './components/UserContainer.js';
import PolicyContainer from './components/PolicyContainer';
import UpdateUser from './components/UpdateUser';
import DeleteUser from './components/DeleteUser';
import DeleteFavorite from './components/DeleteFavorite';

// import './App.css';
import './index.css';


function App() {

  const [currentUser, setCurrentUser] = useState("");
  
  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          
        });
      }
    })
  }, [])

  console.log(currentUser.id, "From App")

  return (
    <>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/login" element={ <Login setCurrentUser={ setCurrentUser }   currentUser={ currentUser } /> } />
        <Route path="/signup" element={ <SignupForm setCurrentUser={ setCurrentUser } currentUser={ currentUser }/> } />
        <Route path="/policy" element= {<AuthRoute setCurrentUser={   setCurrentUser } currentUser={ currentUser }><PolicyContainer   setCurrentUser= { setCurrentUser}  currentUser={ currentUser}/></AuthRoute>}/>


      { currentUser && <Route path="/user" element= {<AuthRoute setCurrentUser={   setCurrentUser }>< UserContainer currentUser={ currentUser}/></AuthRoute>}/>}


        <Route path="/user/:id" element= {<AuthRoute setCurrentUser={   setCurrentUser } currentUser={ currentUser }>< UpdateUser setCurrentUser= {  setCurrentUser}  currentUser={ currentUser}/></AuthRoute>}/>

        <Route path="/done" element= {<AuthRoute setCurrentUser={   setCurrentUser } currentUser={ currentUser }>< DeleteUser setCurrentUser= {  setCurrentUser}  currentUser={ currentUser}/></AuthRoute>}/>
        <Route path="/removepolicy" element= {<AuthRoute setCurrentUser={   setCurrentUser } currentUser={ currentUser }>< DeleteFavorite setCurrentUser= {  setCurrentUser}  currentUser={ currentUser}/></AuthRoute>}/>
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </>
  );
}

export default App;
