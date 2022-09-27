import React, { useState, useEffect} from "react";
import { NavButton} from "../tools/hooks";
import FavoritePolicyCard from "./FavoritePolicyCard"


function UserContainer ({setCurrentUser, currentUser }){
    //useEffect fetch policies might need custom route want to get policies that are favorties of particular user to render here. finish setting up functionality after policy page and ability to favorite
    const [favoritePolicies, setFavoritePolicies] = useState([])
    console.log(currentUser)
    console.log (currentUser.id, "userContainer currentUser.id")
    const { id } = currentUser
    console.log(id)
    useEffect(() => {
        fetch(`/favorites/${id}`)
          .then((r) => r.json())
          .then((r)=>{
            console.log(r, "from fetch usercontainer")
            setFavoritePolicies(r)
            }
            );
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const displayFavoritePolicies = favoritePolicies.map((favpolicy)=> {
        console.log(favpolicy)
        return(
            <FavoritePolicyCard 
            key = {favoritePolicies.id}
            currentUser = { currentUser }
            favpolicy = { favpolicy }
            />
        )

    })


   

    return (
        <>
         <NavButton path="/logout" text="Log Out" />
         <NavButton path="/" text="Home" />
         <NavButton path="/policy" text="Policies" />
        
        <div>
           <h2>Username: {currentUser.user_name} </h2>
           <h2>Email: {currentUser.user_email} </h2>
           <h2>Favorite Policies:</h2>
        </div>
        <br/>
        <div>
        {displayFavoritePolicies}
        </div>
        </>
    )
}

export default UserContainer;