import styled from "styled-components";
import theme from "./theme"

const Button = styled.button`

font-family: 'Overlock', cursive;
background-color: ${theme.sea};
color: black;
border: none;
padding: 5px 10px;
border-radius: 5px;
margin: 10px;
height: 50px;
width: 100px;
font-size: 20px;

`
const Container = styled.div`

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

`
const DeleteButton = styled.button`

font-family: bold;
background-color: ${theme.danger};
color: black;
border: none;
padding: 5px 5px;
border-radius: 4px;
margin: 5px;
`

const RemovePolicyButton = styled.button`

font-family: 'Overlock', cursive;
background-color: ${theme.sea};
color: black;
border: none;
padding: 5px 10px;
border-radius: 5px;
margin: 10px;
height: 50px;
width: 200px;
font-size: 20px;
`

const UpdatePolicyButton = styled.button`

font-family: 'Overlock', cursive;
background-color: ${theme.sea};
color: black;
border: none;
padding: 5px 10px;
border-radius: 5px;
margin: 10px;
height: 50px;
width: 150px;
font-size: 18px;
`
const UserDeleteButton = styled.button`

font-family: 'Overlock', cursive;
background-color: ${theme.sea};
color: black;
border: none;
padding: 5px 10px;
border-radius: 5px;
margin: 10px;
height: 50px;
width: 160px;
font-size: 18px;
`

Button.Container = Container
Button.DeleteButton = DeleteButton
Button.RemovePolicyButton = RemovePolicyButton
Button.UpdatePolicyButton = UpdatePolicyButton
Button.UserDeleteButton = UserDeleteButton

export default Button