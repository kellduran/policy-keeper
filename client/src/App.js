import React, { useState, useEffect } from 'react';
import './App.css';
import SignupForm from './SignupForm';
import Home from './Home';


function App() {
  const [count, setCount] = useState(0);
  const [currentUser, setCurrentUser] = useState("");

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);

  // useEffect(() => {
  //   fetch("/me").then((res) => {
  //     if (res.ok) {
  //       res.json().then((user) => {
  //         setCurrentUser(user);
  //         console.log(currentUser.id)
  //       });
  //     }
  //   });
  // }, []);


  return (
    <div className="App">
      {/* <h1>Page Count: {count}</h1> */}
      <SignupForm setCurrentUser = {setCurrentUser}/>
      <Home />
    </div>
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
