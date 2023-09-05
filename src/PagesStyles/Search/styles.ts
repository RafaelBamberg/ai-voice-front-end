import styled from 'styled-components';
import * as T from './types'

export const SubHeader = styled.div`
  display:flex;
  flex-direction:Column;
  width:80%;
  height:10%;
  align-items:start;
  justify-content:space-between;
  margin-top:3%;
`;

export const Models = styled.div<T.ModelsType>`
  display:grid;
  border-top:${props => props.toggleDarkTheme ? '1px solid grey' : '1px solid grey'};
  border-bottom:${props => props.toggleDarkTheme ? '1px solid grey' : '1px solid grey'};
  width:82%;
  height:80%;
  grid-template-columns: repeat(6, 255px);
  grid-template-rows: repeat(3, 210px);
`;

export const ModelsSearched = styled.div<T.ModelsSearchedType>`
    display:flex;
    flex-direction:column;
    box-shadow: ${props => props.toggleDarkTheme ? '' : 'rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px'};
    border-radius:5px;
    align-items:center;
    justify-content:start;
    width:250px;
    height:200px;
    cursor:pointer;
    transition: .3s ease;
    margin-top:10px;
    background-color: ${props => props.toggleDarkTheme ? 'rgba(127,127,127, .2)' : 'white'};

    &:hover{
      transform: translateY(-5px);
    }
`;

export const ModelImage = styled.img`
  width:100%;
  border-radius: 5px 5px 0px 0px;
  height:70%;
  object-fit:cover;
`;

export const ModelText = styled.p<T.ModelTextType>`
  width:100%;
  height:10%;
  display:flex;
  align-items:center;
  justify-content:center;
  margin:5px 0;
  font-size:18px;
  color: ${props => props.toggleDarkTheme ? 'white' : 'black'};
`;

export const ModelButton = styled.button<T.ModelButtonType>`
  height:10%;
  background-color:transparent;
  border-radius:5px;
  outline:none;
  cursor:pointer;
  padding:12px 8px;
  font-size:14px;
  transition: .5s;
  display:flex;
  align-items:center;
  color: ${props => props.toggleDarkTheme ? 'white' : 'black'};
  border:1px solid ${props => props.toggleDarkTheme ? 'white' : 'black'};

  &:hover{
    color: ${props => props.toggleDarkTheme ? 'black' : 'white'};
    background-color: ${props => props.toggleDarkTheme ? 'white' : 'rgba(0,0,0, .8)'};
  }
`;

export const ModelFooter = styled.div`
  display:flex;
  width:80%;
  justify-content:end;
`;