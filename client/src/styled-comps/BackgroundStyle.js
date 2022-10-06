import styled from 'styled-components'
import theme from "./theme"


const BackgroundStyle = styled.div`
    text-align: center;
    display: flex; 
    align-items: center;
    justify-content: center;
    background-color: ${theme.bone};
`
const DeleteUserBackground = styled.div`
   text-align: center;
display: flex; 
flex-direction: column;
width: 700px;
align-items: left;
background-color: ${theme.bone};
position: absolute;
left: 30%;
top: 20%;
padding-left: 0px;
padding-right: 0px;
padding-top: 20px;
padding-bottom: 75px;
-webkit-border-radius: 12px;
-moz-border-radius: 15px;
border-radius: 20px;
border: 10px solid ${theme.sea}; 
    
`
const HomeContainer = styled.div`
    position: relative;
    top: 120px;
    align-items: center;
    justify-content: center;
    background-color: ${theme.bone};
`
const UserBackground = styled.div`
text-align: center;
display: flex; 
align-items: left;
background-color: ${theme.berry};
`
const UserMyPageBackground = styled.div`
text-align: center;
display: flex; 
align-items: left;
background-color: ${theme.berry};
`
const UserSignUpInsideBackground = styled.div`
border-radius: 3px;
background-color: ${theme.berry};
`
const UserSignUpBackground = styled.div`
text-align: center;
display: flex; 
flex-direction: column;
width: 700px;
align-items: left;
background-color: ${theme.berry};
position: absolute;
left: 30%;
top: 5%;
padding-left: 0px;
padding-right: 0px;
padding-top: 20px;
padding-bottom: 75px;
-webkit-border-radius: 12px;
-moz-border-radius: 15px;
border-radius: 12px;
border: 6px solid ${theme.bone};
`
const UserSignInBackground = styled.div`
text-align: center;
display: flex; 
flex-direction: column;
width: 700px;
align-items: left;
background-color: ${theme.berry};
position: absolute;
left: 30%;
top: 5%;
padding-left: 0px;
padding-right: 0px;
padding-top: 20px;
padding-bottom: 170px;
border-radius: 12px;
-webkit-border-radius: 12px;
-moz-border-radius: 15px;
border: 6px solid ${theme.bone};
`
const UserUpdateBackground = styled.div`
text-align: center;
display: flex; 
flex-direction: column;
width: 600px;
align-items: left;
background-color: ${theme.berry};
position: absolute;
left: 30%;
top: 20%;
padding-left: 0px;
padding-right: 0px;
padding-top: 50px;
padding-bottom: 120px;
border-radius: 12px;
-webkit-border-radius: 12px;
-moz-border-radius: 15px;
border: 6px solid ${theme.bone};
`
const UserSignInNavBackground = styled.div`
text-align: center;
display: flex; 
width: 450px;
align-items: left;
background-color: ${theme.berry};
position: relative;
left: 20%;
top: 60px;
padding-left: 0px;
padding-right: 0px;
padding-top: 20px;
padding-bottom: 0px;
border-radius: 10px;
`
const UserUpdateNavBackground = styled.div`
text-align: center;
display: flex; 
width: 350px;
align-items: left;
background-color: ${theme.berry};
position: relative;
left: 33%;
top: 30px;
padding-left: 0px;
padding-right: 0px;
padding-top: 20px;
padding-bottom: 0px;
border-radius: 10px;
`

const UserSignInErrorBackground = styled.div`
font-weight: 700;
font-size: 30px;
text-align: left;
display: flex; 
flex-direction: column;
width: 400px;
align-items: center;
justify-content: center;
background-color: ${theme.berry};
position: relative;
left: 25%;
top: 20px;
padding-left: 0px;
padding-right: 0px;
padding-top: 0px;
padding-bottom: 5px;
border-radius: 0px;
`
const UserSignUpNavBackground = styled.div`
text-align: center;
display: flex; 
width: 300px;
align-items: center;
background-color: ${theme.berry};
position: relative;
left: 30%;
top: 30px;
padding-left: 0px;
padding-right: 0px;
padding-top: 20px;
padding-bottom: 0px;
border-radius: 10px;
`
const UserDeleteChangedMindBackground = styled.div`
text-align: center;
display: flex; 
width: 300px;
align-items: center;
background-color: ${theme.bone};
position: relative;
left: 35%;
top: 30px;
padding-left: 0px;
padding-right: 0px;
padding-top: 20px;
padding-bottom: 0px;
border-radius: 10px;
`

const UserSignUpErrorBackground = styled.div`
font-weight: 700;
font-size: 30px;
text-align: center;
display: flex; 
width: 400px;
align-items: left;
background-color: ${theme.berry};
position: relative;
left: 22%;
top: 30px;
padding-left: 10px;
padding-right: 5px;
padding-top: 0px;
padding-bottom: 0px;
border-radius: 10px;
`
const UserUpdateErrorBackground = styled.div`
font-weight: 700;
font-size: 30px;
text-align: center;
display: flex; 
width: 400px;
align-items: left;
background-color: ${theme.berry};
position: relative;
left: 22%;
top: 20px;
padding-left: 10px;
padding-right: 5px;
padding-top: 0px;
padding-bottom: 0px;
border-radius: 10px;
`
const UserSignUpWelcomeBackground = styled.div`
font-weight: 700;
font-size: 30px;
text-align: center;
display: flex; 
width: 400px;
align-items: left;
background-color: ${theme.berry};
position: relative;
left: 22%;
top: 30px;
padding-left: 10px;
padding-right: 5px;
padding-top: 0px;
padding-bottom: 0px;
border-radius: 10px;
`
const PolicyContainerBackground = styled.div`
text-align: center;
display: flex; 
align-items: center;
justify-content: center;
background-color: ${theme.berry};
`
const PolicyBackground = styled.div`
text-align: center; 
background-color: ${theme.bone};
border-top: 2px solid black;
`
const PolicyCardBackground = styled.div`
text-align: center; 
background-color: ${theme.bone};
border-top: 2px solid black;
&:hover {
      background-color: ${theme.hover};
    }
`
//User Page Related 

BackgroundStyle.UserBackground = UserBackground

BackgroundStyle.DeleteUserBackground = DeleteUserBackground

BackgroundStyle.UserMyPageBackground = UserMyPageBackground

BackgroundStyle.UserUpdateBackground = UserUpdateBackground

BackgroundStyle.UserUpdateNavBackground = UserUpdateNavBackground

BackgroundStyle.UserUpdateErrorBackground = UserUpdateErrorBackground

BackgroundStyle.UserDeleteChangedMindBackground = UserDeleteChangedMindBackground

//SignUp Page

BackgroundStyle.UserSignUpBackground = UserSignUpBackground

BackgroundStyle.UserSignUpInsideBackground = UserSignUpInsideBackground

BackgroundStyle.UserSignUpNavBackground = UserSignUpNavBackground

BackgroundStyle.UserSignUpErrorBackground = UserSignUpErrorBackground

BackgroundStyle.UserSignUpWelcomeBackground = UserSignUpWelcomeBackground

//Login Page
BackgroundStyle.UserSignInBackground = UserSignInBackground

BackgroundStyle.UserSignInNavBackground = UserSignInNavBackground

BackgroundStyle.UserSignInErrorBackground = UserSignInErrorBackground

//Policy Related 
BackgroundStyle.PolicyBackground = PolicyBackground

BackgroundStyle.PolicyCardBackground = PolicyCardBackground

BackgroundStyle.PolicyContainerBackground = PolicyContainerBackground

//Misc.
BackgroundStyle.HomeContainer = HomeContainer



export default BackgroundStyle