import React, { useState, useEffect } from 'react';
import './App.css';
import SignupForm from './SignupForm';
import Home from './components/Home';
import Login from './components/Login';
import { Routes, Route } from 'react-router-dom';
import { Root, NotFound } from './components/landings';



function App() {
  // const [count, setCount] = useState(0);
  const [currentUser, setCurrentUser] = useState("");

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);

  


  return (
    <Routes>
      <Route index element={ <AuthRoute setCurrentUser={ setCurrentUser } currentUser={ currentUser }><Home setCurrentUser= { setCurrentUser } currentUser={ currentUser}/></ AuthRoute>}/>
      {/* <Route path="/" element={ <Home /> } /> */}
      <Route path="signup" element={ <SignupForm setCurrentUser={ setCurrentUser } /> } />
      <Route path="login" element={ <Login setCurrentUser={ setCurrentUser } /> } />
      
      <Route path="*" element={ <NotFound /> } />



    </Routes>
    // <div className="App">
    //   {/* <h1>Page Count: {count}</h1> */}
    //   {/* <SignupForm setCurrentUser = {setCurrentUser}/> */}
    //   {/* <Home /> */}
    // </div>
  );



  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
