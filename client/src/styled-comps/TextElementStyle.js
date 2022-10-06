import styled from "styled-components";
import theme from "./theme"


const Text = styled.h1`
font-family: 'Laila', sans-serif;
color: black;
font-size: 50px;
text-shadow: -1px 1px 0 "#faf9f6",
              1px 1px 0 "#faf9f6",
              1px -1px 0 "#faf9f6",
              -1px -1px 0 "#faf9f6";
`
const Style2 = styled.h1`
font-family: 'Laila', sans-serif;
color: black;
font-size: 40px;
text-shadow: -1px 1px 0 "#faf9f6",
              1px 1px 0 "#faf9f6",
              1px -1px 0 "#faf9f6",
              -1px -1px 0 "#faf9f6";
`
const Style3 = styled.h1`
font-family: 'Laila', sans-serif;
color: ${theme.bone};
font-size: 40px;
text-shadow: -1px 1px 0 "#faf9f6",
              1px 1px 0 "#faf9f6",
              1px -1px 0 "#faf9f6",
              -1px -1px 0 "#faf9f6";

`

const Style4 = styled.h1`
font-family: 'Laila', sans-serif;
color: black;
font-size: 30px;
text-shadow: -1px 1px 0 "#faf9f6",
              1px 1px 0 "#faf9f6",
              1px -1px 0 "#faf9f6",
              -1px -1px 0 "#faf9f6";
`

Text.Style2 = Style2
Text.Style3 = Style3
Text.Style4 = Style4

export default Text;