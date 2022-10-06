import styled from 'styled-components'
import theme from "./theme"


const BackgroundStyle = styled.div`
    text-align: center;
    display: flex; 
    align-items: center;
    justify-content: center;
    background-color: ${theme.bone};
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
border-radius: 10px;
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
padding-bottom: 200px;
border-radius: 10px;
`
const UserSignInErrorNavBackground = styled.div`
text-align: center;
display: flex; 
width: 450px;
align-items: left;
background-color: ${theme.berry};
position: relative;
left: 20%;
top: 80px;
padding-left: 0px;
padding-right: 0px;
padding-top: 20px;
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
BackgroundStyle.UserBackground = UserBackground
BackgroundStyle.UserMyPageBackground = UserMyPageBackground
BackgroundStyle.UserSignUpBackground = UserSignUpBackground
BackgroundStyle.UserSignInBackground = UserSignInBackground
BackgroundStyle.UserSignInErrorNavBackground = UserSignInErrorNavBackground
BackgroundStyle.PolicyBackground = PolicyBackground
BackgroundStyle.PolicyCardBackground = PolicyCardBackground
BackgroundStyle.PolicyContainerBackground = PolicyContainerBackground
BackgroundStyle.HomeContainer = HomeContainer
export default BackgroundStyle