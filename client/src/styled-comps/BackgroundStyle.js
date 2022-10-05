import styled from 'styled-components'
import theme from "./theme"


const BackgroundStyle = styled.div`
    text-align: center;
    display: flex; 
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
BackgroundStyle.PolicyBackground = PolicyBackground
BackgroundStyle.PolicyCardBackground = PolicyCardBackground
BackgroundStyle.PolicyContainerBackground = PolicyContainerBackground
export default BackgroundStyle