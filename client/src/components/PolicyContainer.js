import React, { useState, useEffect } from "react";
import { NavButton } from "../tools/hooks";
import PolicyCard from "./PolicyCard";
import StyledDiv from "../styled-comps/BackgroundStyle";

function PolicyContainer({ currentUser }){
    console.log(currentUser)
    const [showPolicies, setShowPolicies] = useState([])
    
    useEffect(() => {
        fetch("/policies")
          .then((r) => r.json())
          .then((r)=>setShowPolicies(r));
    }, []);

    const displayPolicies = showPolicies.map((policy) => {
        return(
            <PolicyCard 
            key = {showPolicies.id}
            currentUser = { currentUser }
            policy = { policy }
            />
        )
    })
    return(
        <>
        <div>
        <NavButton path="/logout" text="Log Out" />
        <NavButton path="/" text="Home" />
        <NavButton path="/user" text="My Page" />
        </div>
        <StyledDiv.UserBackground>
            <h1>Policies Page</h1>
            <h2>State Level Opioid Prescribing Policies</h2>  
        </StyledDiv.UserBackground>
        <StyledDiv.PolicyBackground>
        {displayPolicies}
        </StyledDiv.PolicyBackground>
        </>
    )
}

export default PolicyContainer;