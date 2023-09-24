import styled from 'styled-components'
import * as T from './types'

export const TopLine = styled.div`
  width:80%;
  height:50px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin-top:15px;
`;

export const Line = styled.div<T.LineType>`
  height:4px;
  width:92%;
  border-radius:2px;
  background-color:${props => props.toggleDarkTheme ? 'white' : 'black'};
`;

export const Forms = styled.div`
  height:80%;
  width:80%;
  display:flex;
  justify-content:space-between;
`;

export const Form = styled.div`
  height:90%;
  width:49%;
`;

export const ButtonSection = styled.div`
  height:10%;
  width:80%;
  display:flex;
  justify-content:end;
`;

export const InputSection = styled.div`
  display:flex;
  width:100%;
  margin:12px 0px;
`;

export const InputDiv = styled.div`
  display:flex;
  flex-direction:Column;
  width:100%;

  .fullInput{
    width:95%;
  }

  span{
    color:red;
  }

`

export const Label = styled.label<T.InputRegisterType>`
  margin-top:8px;
  color: ${ props => props.toggleDarkTheme ? 'white': 'black'}
`;

export const Input = styled.input`
  width:90%;
  padding:7px;
  margin:5px 0px;
`;

