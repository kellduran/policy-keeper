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

Button.Container = Container
Button.DeleteButton = DeleteButton

export default Button