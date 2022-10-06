import React from "react";
import { Logout, NavButton} from "../tools/hooks";
import { BackgroundStyleHome } from "../styled-comps/BackgroundStyleHome";
import StyledH1 from "../styled-comps/TextElementStyle"
import StyledDiv from "../styled-comps/BackgroundStyle"
import StyledSpan from "../styled-comps/SeparatorSpan";

function Home( ){
   
    return(
        <BackgroundStyleHome>
            <StyledDiv.HomeContainer>
            <StyledH1>Welcome to Policy Keeper!</StyledH1>
            <NavButton path="/signup" text="Sign Up" />
            <NavButton path="/login" text="Login" />
            <StyledSpan.Medium />
            <NavButton path="/user" text="My Page" />
            <NavButton path="/policy" text="Policies" />
            <Logout />
            </StyledDiv.HomeContainer>
        </BackgroundStyleHome>
    );
            
            
};

export default Home;