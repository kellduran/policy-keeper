import React, { setState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { NavButton} from "../tools/hooks";


function UserContainer ({setCurrentUser, currentUser }){
    
    
    
    
    return (
        <>
         <NavButton path="/logout" text="Log Out" />
         <NavButton path="/" text="Home" />
         <NavButton path="/policy" text="Policies" />
        User info here
        {console.log(currentUser)}
        </>
    )
}

export default UserContainer;