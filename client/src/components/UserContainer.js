import React, { useState, useEffect} from "react";
import { NavButton} from "../tools/hooks";
import FavoritePolicyCard from "./FavoritePolicyCard";
import { Link } from 'react-router-dom';


function UserContainer ({setCurrentUser, currentUser }){
    
    //update!user on this component: user_name; use PATCH
    const [favoritePolicies, setFavoritePolicies] = useState([])
    

    console.log (currentUser.id, "userContainer currentUser.id")
    const { id } = currentUser
    console.log(id)
    
    useEffect(() => {
        fetch(`/favorites/${id}`)
          .then((res) => res.json())
          .then((res)=>{
            console.log(res, "from favorites fetch usercontainer")
            setFavoritePolicies(res)
            }
            );
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const displayFavoritePolicies = favoritePolicies.map((favpolicy)=> {
        console.log(favpolicy)
        return(
            <FavoritePolicyCard 
            key = {favoritePolicies.law_citation}
            currentUser = { currentUser }
            favpolicy = { favpolicy }
            id = {favpolicy.id}
            />
        )

    })

    console.log(favoritePolicies)
   

    return (
        <>
         <NavButton path="/logout" text="Log Out" />
         <NavButton path="/" text="Home" />
         <NavButton path="/policy" text="Policies" />
        
        <div>
            <div>
                <h2>Username: {currentUser.user_name} </h2>
                <h2>Email: {currentUser.user_email} </h2>
                <br/>
                <Link to={`/user/${id}`}>
                <button>Update My Information</ button>
                </Link>
                <Link to={"/done"}>
                <button>Delete My Account</ button>
                </Link>
           </div>
           <br/>
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