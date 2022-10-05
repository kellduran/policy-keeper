import React from "react";
import { Logout, NavButton} from "../tools/hooks";
import { BackgroundStyleHome } from "../styled-comps/BackgroundStyleHome";

function Home( ){
   
    return(
        <BackgroundStyleHome>
            <h1>Welcome to Policy Keeper!</h1>
            <NavButton path="/signup" text="Sign Up" />
            <NavButton path="/login" text="Login" />
            
            <NavButton path="/user" text="My Page" />
            <NavButton path="/policy" text="Policies" />
            <Logout />

        </BackgroundStyleHome>
    );
            
            
};

export default Home;