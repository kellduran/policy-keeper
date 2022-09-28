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
align-items: center;
justify-content: center;
background-color: ${theme.berry};
`
const PolicyBackground = styled.div`
text-align: center; 
background-color: ${theme.bone};
border-top: 2px solid black;
`
BackgroundStyle.UserBackground = UserBackground
BackgroundStyle.PolicyBackground = PolicyBackground
export default BackgroundStyle