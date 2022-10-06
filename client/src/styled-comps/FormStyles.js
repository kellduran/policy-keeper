import styled from "styled-components";
import theme from "./theme"

// const Form = styled.form`

// width: 500px;
// box-shadow: rgb(0 0 0 / 16%) 1px 1px 10px;
// padding-top: 30px;
// padding-bottom: 20px;
// border-radius: 8px;
// background-color: ${theme.danger};
//`
const Form = styled.form`
display:flex;
flex-direction:column;
width: 400px;
margin:auto;
font-family:Arial;
font-size:30px;

`
const Input = styled.input`

font-family: 'News Cycle', sans-serif;
padding: 5px 5px;
width: 18%;
margin: 5px 5px;
height: 17px;
border: 3px, ${theme.berry};
position: 10px;
border-radius: 5px;
/* display: block; */
`
const InputSignUp = styled.input`

font-family: 'Laila', sans-serif;
padding: 5px 5px;
width: 100%;
margin: 5px 5px;
height: 17px;
border: 3px, ${theme.berry};
position: 10px;
border-radius: 5px;
/* display: block; */
`
const InputUpdateUser = styled.input`

font-family: 'Laila', sans-serif;
padding: 5px 5px;
width: 100%;
margin: 5px 5px;
height: 17px;
border: 3px, ${theme.berry};
position: 10px;
border-radius: 5px;
/* display: block; */
`
const Label = styled.input`

font-family: 'News Cycle', sans-serif;
padding: 5px 0px;

margin: 5px 0px;

/* display: block; */
`
const LabelSignUp = styled.input`

font-family: 'Laila', sans-serif;
/* padding: 5px 0px;

margin: 5px 0px; */

/* display: block; */
`


Form.Input = Input
Form.InputSignUp = InputSignUp
Form.InputUpdateUser = InputUpdateUser
Form.LabelSignUp = LabelSignUp
Form.Label = Label


export default Form