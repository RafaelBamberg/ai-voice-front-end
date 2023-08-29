import styled from 'styled-components';
import * as T from './types'

export const Header = styled.div`
  display:flex;
  align-items:center;
  width:80%; 
  justify-content:space-between; 
  height:100%;
`;

export const Logo = styled.div`
  display:flex;
  align-items:center;
  width:20%;
  height:100%;
`;

export const LogoImage = styled.img`
  width:60px;
  height:60px;
`;

export const SearchModels = styled.div<T.SearchModelsType>`
  width:40%;
  height:50%;
  display:flex;
  align-items:center;
  border-radius:20px;
  justify-content:center;
  border:1px solid rgba(128, 128, 128, .3);
  transition: .5s;
  background-color: ${ props => props.toggleInputFocus ? 'rgba(0,0,0, .8)' : 'rgba(128, 128, 128, 0.1)'};
  box-shadow: ${ props => props.toggleInputFocus ? 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;' : 'rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;'};
`;

export const Input = styled.input`
  width:93%;
  color: white;
  height:90%;
  outline: none;
  border:none;
  background-color:transparent;
  font-size:14px;
  padding-left:5px;
  font-family: Roboto;
`;

export const Menu = styled.div`
  display:flex;
  justify-content:end;
  align-items:center;
  height:100%;
  width:20%;
`;

export const MenuIn = styled.div`
  display:flex;
  width:100%; 
  justifyContent:end;
`;

export const DropDown = styled.div<T.DropDownType>`
    display: ${props => props.toggleDropDown ? 'block' : 'none'};
    position:absolute;  
    background-color:white;
    border-radius:8px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    border:1.5px solid gray;
    max-width:200px;
    margin-top:2%;
`;

export const MenuList = styled.ul`
  display:flex; 
  list-style:none; 
  cursor:pointer;
  flex-direction:column;
  padding:0;
  margin:0;
  
  :hover{
    opacity:1;
    font-weight:bold;
  }
    
  .top{
    border-top:0px;
  }
  `;
  
  export const MenuItem = styled.li`
  transition:.2s;
  text-align:center;
  font-size:16px;
  opacity:.7;
  padding:8px 48px;
  border-top: 1.5px solid black; 
`;
