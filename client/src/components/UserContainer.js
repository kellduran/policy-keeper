import React, { setState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { NavButton} from "../tools/hooks";


function UserContainer ({setCurrentUser, currentUser }){
    //useEffect fetch policies might need custom route want to get policies that are favorties of particular user to render here. finish setting up functionality after policy page and ability to favorite
    
    
    
    return (
        <>
         <NavButton path="/logout" text="Log Out" />
         <NavButton path="/" text="Home" />
         <NavButton path="/policy" text="Policies" />
        <div>
           <h3>Username: {currentUser.user_name} </h3>
           <h3>Email: {currentUser.user_email} </h3>
           <h3>Favorite Policies:</h3>

        </div>
        
        {console.log(currentUser)}
        </>
    )
}

export default UserContainer;