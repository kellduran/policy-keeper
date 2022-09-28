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
BackgroundStyle.UserBackground = UserBackground
export default BackgroundStyle