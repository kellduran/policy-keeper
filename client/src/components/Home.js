import React, { useState, useEffect } from "react";
import { Logout, NavButton} from "../tools/hooks";

function Home( ){
    // const [showOtherButtons, setShowOtherButtons] = useState(false)
    // const [currentUser, setCurrentUser] = useState("");
    // useEffect(() => {
    //     fetch("/me").then((res) => {
    //       if (res.ok) {
    //         res.json().then((user) => {
    //             setCurrentUser(user);
    //             console.log(user, "From Home");
    //             setShowOtherButtons(true);
    //         });
    //       } else {
    //         setShowOtherButtons(false)
    //       }
    //     })
    //   }, [])

    

    // const loggedButtons =  (
    //     <div>
    //     <Logout />
    //     <NavButton path="/user" text="My Page" />
    //     <NavButton path="/policy" text="Policies" />
    //     </div>
    // )
    
    // const notLogged = (
    //     <div>
    //     This app is to intended to help keep track of public policy documents. 
    //     <NavButton path="/signup" text="sign up" />
    //     <NavButton path="/login" text="log in" />
    //     </div>
    // )

    return(
        <div>
            <h1>Welcome to Policy Keeper!</h1>
            <NavButton path="/signup" text="Sign Up" />
            <NavButton path="/login" text="Login" />
            
            <NavButton path="/user" text="My Page" />
            <NavButton path="/policy" text="Policies" />
            <Logout />
            {/* {showOtherButtons ? loggedButtons : notLogged } */}
        </div>
    );
            
            
};

export default Home;