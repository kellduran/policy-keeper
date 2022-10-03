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
import { FP_ID } from './tools/FavPolContext';


function App() {

  const [currentUser, setCurrentUser] = useState("");
  const [value, setValue] = useState([]);


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
    <><FP_ID.Provider value={{ value, setValue }}> 
      <Routes>
        <Route path="/" element={ <Home /> } />

        <Route path="/login" element={ <Login setCurrentUser={ setCurrentUser }   currentUser={ currentUser } /> } />

        <Route path="/signup" element={ <SignupForm setCurrentUser={ setCurrentUser } currentUser={ currentUser }/> } />

        <Route path="/policy" element= {<AuthRoute setCurrentUser={   setCurrentUser } currentUser={ currentUser }><PolicyContainer   setCurrentUser= { setCurrentUser}  currentUser={ currentUser}/></AuthRoute>}/>

        
        { currentUser && <Route path="/user" element= {<AuthRoute setCurrentUser={   setCurrentUser }>< UserContainer currentUser={ currentUser}/></AuthRoute>}/>}

        <Route path="/user/:id" element= {<AuthRoute setCurrentUser={   setCurrentUser } >< UpdateUser setCurrentUser= {  setCurrentUser}  currentUser={ currentUser}/></AuthRoute>}/>

        <Route path="/done" element= {<AuthRoute setCurrentUser={   setCurrentUser } currentUser={ currentUser }>< DeleteUser setCurrentUser= {  setCurrentUser}  currentUser={ currentUser}/></AuthRoute>}/>

        {currentUser && <Route path="/removepolicy" element= {<AuthRoute setCurrentUser={   setCurrentUser } >< DeleteFavorite /></AuthRoute>}/>}
      

        <Route path="*" element={ <NotFound /> } />
      </Routes>
      </FP_ID.Provider>
    </>
  );
}

export default App;
