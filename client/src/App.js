import React, { useState } from 'react';
import { Routes, Route} from 'react-router-dom';
import { NotFound } from './components/landings';
import { AuthRoute } from './tools/hooks';

import Home from './components/Home';
import SignupForm from './components/SignupForm';
import Login from './components/Login';
import UserContainer from './components/UserContainer.js';
import PolicyContainer from './components/PolicyContainer';

import './App.css';


function App() {

  const [currentUser, setCurrentUser] = useState("");
  

  return (
    <>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/login" element={ <Login setCurrentUser={ setCurrentUser }   currentUser={ currentUser } /> } />
        <Route path="/signup" element={ <SignupForm /> } />
        <Route path="/policy" element= {<AuthRoute setCurrentUser={   setCurrentUser } currentUser={ currentUser }><PolicyContainer   setCurrentUser= { setCurrentUser}  currentUser={ currentUser}/></   AuthRoute>}/>
        <Route path="/user" element= {<AuthRoute setCurrentUser={   setCurrentUser } currentUser={ currentUser }>< UserContainer setCurrentUser= {  setCurrentUser}  currentUser={ currentUser}/></   AuthRoute>}/>
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </>
  );
}

export default App;
