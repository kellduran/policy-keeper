import styled from "styled-components";
import theme from "./theme"

const Button = styled.button`

font-family: 'Overlock';
background-color: ${theme.sea};
color: black;
border: none;
padding: 5px 10px;
border-radius: 5px;
margin: 10px;
height: 50px;
width: 115px;
font-size: 20px;
cursor: pointer;

`
const Container = styled.div`

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

`
const DeleteButton = styled.button`
font-weight: 500;
font-family: bold;
background-color: ${theme.danger};
color: black;
border: none;
border-radius: 5px;
margin: 10px;
height: 50px;
width: 150px;
font-size: 24px;
padding-left: 10px;
padding-right: 10px;
padding-top: 20px;
padding-bottom: 55px;
cursor: pointer;
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
cursor: pointer;
`

const UpdateUserButton = styled.button`

font-family: 'Overlock', cursive;
background-color: ${theme.sea};
color: black;
border: none;
border-radius: 5px;
margin: 10px;
height: 50px;
width: 150px;
font-size: 18px;
padding-left: 10px;
padding-right: 10px;
padding-top: 10px;
padding-bottom: 55px;
cursor: pointer;
`
const ChangedMindButton = styled.button`

font-family: 'Overlock', cursive;
background-color: ${theme.sea};
color: black;
border: none;
border-radius: 5px;
margin: 10px;
height: 60px;
width: 200px;
font-size: 18px;
padding-left: 10px;
padding-right: 10px;
padding-top: 10px;
padding-bottom: 60px;
cursor: pointer;
`
const UserDeleteButton = styled.button`
font-family: 'Overlock', cursive;
background-color: ${theme.sea};
color: black;
border: none;
border-radius: 5px;
margin: 10px;
height: 50px;
width: 160px;
font-size: 18px;
padding-left: 0px;
padding-right: 0px;
padding-top: 10px;
padding-bottom: 55px;
cursor: pointer;
`

Button.Container = Container
Button.DeleteButton = DeleteButton
Button.RemovePolicyButton = RemovePolicyButton
Button.UpdateUserButton = UpdateUserButton
Button.ChangedMindButton = ChangedMindButton
Button.UserDeleteButton = UserDeleteButton

export default Button