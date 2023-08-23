import styled from 'styled-components';

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
  width:50%;
  height:100%;
`;

export const LogoImage = styled.img`
  width:60px;
  height:60px;
`;

export const Menu = styled.div`
  display:flex;
  justify-content:end;
  align-items:center;
  width:50%;
  height:100%;
`;

export const MenuList = styled.ul`
  display:flex; 
  list-style:none; 
  cursor:pointer;
  
  :hover{
    text-decoration:underline;
    transform:scale(1.05);
    opacity:1;
  }
`;

export const MenuItem = styled.li`
  margin:0 10px;
  transition:.2s;
  font-size:16px;
  opacity:.7;
`;