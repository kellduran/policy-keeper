import styled from "styled-components";
import theme from "./theme"

const Form = styled.form`

width: 500px;
box-shadow: rgb(0 0 0 / 16%) 1px 1px 10px;
padding-top: 30px;
padding-bottom: 20px;
border-radius: 8px;
background-color: ${theme.danger};


`
const Input = styled.input`

font-family: 'News Cycle', sans-serif;
padding: 5px 0px;
width: 18%;
margin: 5px 0px;
border: 3px, ${theme.berry};

`

Form.Input = Input


export default Form