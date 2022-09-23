import React from "react";
import { NavButton} from "../tools/hooks";

function Home(){
    return(
        <div>
            <h1>Welcome to Policy Keeper!</h1>
            <p>This app is to intended to help keep track of public policy documents. </p>
            <NavButton path="/signup" text="sign up" />
            <NavButton path="/login" text="log in" />
        </div>
    )
}

export default Home;