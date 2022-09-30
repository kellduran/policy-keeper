import React, { useState, useEffect } from "react";
import { NavButton } from "../tools/hooks";

import StyledDiv from "../styled-comps/BackgroundStyle";
import Search from "./Search";
import PolicyList from "./PolicyList";

function PolicyContainer({ currentUser }){
    console.log(currentUser)
    const [showPolicies, setShowPolicies] = useState([])
    
    useEffect(() => {
        fetch("/policies")
          .then((r) => r.json())
          .then((r)=>setShowPolicies(r));
    }, []);
    
    console.log(showPolicies)
    console.log("policy Contianer")

    const [ searchString, setSearchString ] = useState('')

    const changeSearchString = newString => {
      setSearchString ( newString )
    }
  
    const filteredPolices = showPolicies.filter((policy)=>{
      return policy.title.toLowerCase().includes( searchString.toLowerCase() )
    })


    // const displayPolicies = showPolicies.map((policy) => {
    //     return(
    //         <PolicyCard 
    //         key = {policy.id}
    //         currentUser = { currentUser }
    //         policy = { policy }
    //         />
    //     )
    // })
    return(
        <>
        <div>
        <NavButton path="/" text="Home" />
        <NavButton path="/user" text="My Page" />
        </div>
        <StyledDiv.UserBackground>
            <h1>Policies Page</h1>
            <h2>State Level Opioid Prescribing Policies</h2>  
        </StyledDiv.UserBackground>
        <StyledDiv.PolicyBackground>
            <Search changeSearchString={ changeSearchString }/>
            <PolicyList filteredPolicies={ filteredPolices } currentUser= { currentUser }/>
        {/* {displayPolicies} */}
        </StyledDiv.PolicyBackground>
        </>
    )
}

export default PolicyContainer;