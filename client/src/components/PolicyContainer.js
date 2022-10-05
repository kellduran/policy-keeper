import React, { useState, useEffect } from "react";
import { NavButton } from "../tools/hooks";
import { useNavigate } from "react-router-dom";
import StyledDiv from "../styled-comps/BackgroundStyle";
import Search from "../tools/Search";
import PolicyList from "./PolicyList";

function PolicyContainer({ currentUser, setCurrentUser, handleClickCreate, favoritePolicies, errors }){
  // console.log(currentUser)
  const [showPolicies, setShowPolicies] = useState([])
  const navigate = useNavigate()
  

  
  
  useEffect(() => {
    if (!currentUser){
      console.log("not seeing currentUser")
      fetch("/me").then((res) => {
        if (res.ok) {
          res.json().then((user) => {
            setCurrentUser(user);
          })
          .then(getPolicies);
        } else {
          navigate('/login')
        }
      })
    } 

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  
  
  
    const getPolicies = 
    useEffect(() => {
        fetch("/policies")
          .then((r) => r.json())
          .then((r)=>setShowPolicies(r));
    }, []);
    

    const [ searchString, setSearchString ] = useState('')

    const changeSearchString = newString => {
      setSearchString ( newString )
    }
  
    const filteredPolices = showPolicies.filter((policy)=>{
      return policy.title.toLowerCase().includes( searchString.toLowerCase() ) ||
            policy.summary.toLowerCase().includes( searchString.toLowerCase() ) ||
            policy.title_description.toLowerCase().includes( searchString.toLowerCase() ) ||
            policy.law_citation.toLowerCase().includes( searchString.toLowerCase() ) ||
            policy.policy_type.toLowerCase().includes( searchString.toLowerCase() ) ||
            policy.state.toLowerCase().includes( searchString.toLowerCase() )

    })


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
            <PolicyList filteredPolicies={ filteredPolices } currentUser= { currentUser } handleClickCreate={ handleClickCreate } favoritePolicies={ favoritePolicies } errors={ errors } />
        {/* {displayPolicies} */}
        </StyledDiv.PolicyBackground>
        </>
    )
}

export default PolicyContainer;