import React, { useState, useEffect } from "react";
import { NavButton } from "../tools/hooks";

function PolicyContainer(){

    // probably don't need fetch because authroute?

    return(
        <>
        <NavButton path="/logout" text="Log Out" />
        <NavButton path="/" text="Home" />
        <NavButton path="/user" text="My Page" />
        <div>
            Policy info here
            <p>more info here</p>
        </div>
        </>
    )
}

export default PolicyContainer;