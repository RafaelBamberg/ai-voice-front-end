import styled from "styled-components"
import * as G from "../../GlobalStyles/types"

export const Box = styled.div<G.ToggleDarkThemeType>`
  display:flex;
  flex-direction:column;
  width:300px;
  height:250px;
  background-color: ${props => props.toggleDarkTheme ? 'black' : 'white'};
  align-items:center;
  justify-content:space-around;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 30px 40px;
`;

export const Label = styled.label<G.ToggleDarkThemeType>`
  font-size:18px;
  font-weight:300;
  color: ${props => props.toggleDarkTheme ? 'white' : 'black'};
`;

export const Input = styled.input`
  padding:5px;
  width:70%;
`;