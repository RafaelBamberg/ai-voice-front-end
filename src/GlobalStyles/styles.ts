import styled from 'styled-components'
import * as T from './types';

export const Container = styled.div<T.ContainerType>`
  background:${props => props.bc};
  width:${props => props.width};
  height:${props => props.height};
  position:${props => props.position};
  display:flex;
  flex-direction:${props => props.fd};
  align-items:${props => props.ai};
  justify-content:${props => props.jc};
  margin-top:${props => props.mt};
  z-index:${props => props.z};
  transition: .2s;
  border-top: ${props => props.bt};
`;

export const Paragraph = styled.p<T.ParagraphType>`
  margin:${props => props.m ? props.m : '0'};
  padding:${props => props.p};
  font-size:${props => props.fs};
  font-family:${props => props.ff};
  font-weight:${props => props.fw};
  cursor:${props => props.cursor};
  color:${props => props.color};
  text-align: ${props => props.ta};
`;

export const Icon = styled.img<T.IconType>`
  width:${props => props.width};
  height:${props => props.height}; 
  margin:${props => props.m};
  cursor:${props => props.cursor};
  transition:.2s;
  transform:${props => props.transform};
  &:hover{
    opacity:.7;
  }
`;

export const Button = styled.button<T.ButtonType>`
  border:${props => props.border};
  background:${props => props.bc};
  color:${props => props.color};
  padding: ${props => props.p};
  cursor:${props => props.cursor};
  border-radius: ${props => props.br};
  font-size:${props => props.fs};
  font-family:${props => props.ff};
  font-weight:${props => props.fw};
  transition: .5s;
  margin:${props => props.m};
  width:${props => props.width};
  height:${props => props.height};

  &{
    background-position: center;
    transition: background .7s;
  }

  &:hover {
    color: ${props => props.color === 'white' ? 'black' : 'white'};
    background: ${props => props.color} radial-gradient(circle, transparent 1%, ${props => props.color} 1%) center/15000%;
  }

  &:active {
    background-color: rgb(127,127,127);
    background-size: 100%;
    transition: background 0s;
  }

  &:disabled {
    background-color: grey;
    opacity:.5;
    background-size: 100%;
    transition: background 0s;

    &:hover{
      background: grey;
      opacity:.4;
      transition: 1s;
    }
  }
`;

export const LinkHref = styled.a<T.LinkHrefType>`
  margin:${props => props.m};

  &:link {
    color: grey;
  }
  
  &:visited {
    color: grey;
  }

  &:hover{
    opacity: .7;
  }
`;

export const Header = styled.div<T.HeaderType>`
  display:flex;
  align-items:${props => props.ai};
  width:80%; 
  justify-content:${props => props.jc}; 
  height:100%;
`;

export const HeaderUser = styled.div`
  display:flex;
  align-items:center;
  margin-left:10px;
`;

export const UserAvatar = styled.img<T.UserAvatarType>`
  border-radius:45px;
  border: ${props => props.border};
  width:32px;
  height:32px;
  margin-left:10px;
`;

export const User = styled.div`
`;

export const UserEnergy = styled.div`
  display:flex;
  justify-content:space-between;
`;

export const HeaderLogo = styled.div`
  display:flex;
  align-items:center;
  width:20%;
  height:100%;
`;

export const LogoImage = styled.img<T.LogoImagemType>`
  width:${props => props.width};
  height:${props => props.height};
`;

export const HeaderForms = styled.form`
  width: 93%;
`;

export const HeaderSearchModels = styled.div<T.SearchModelsType>`
  width:40%;
  height:50%;
  display:flex;
  align-items:center;
  border-radius:20px;
  justify-content:center;
  border:1px solid rgba(128, 128, 128, .3);
  transition: .5s;
  background-color:${props => props.toggleDarkTheme ? (props.toggleInputFocus ? 'rgba(255, 255, 255, .9)' : 'rgba(255,255,255, .3)') : (props.toggleInputFocus ? 'rgba(0,0,0, .8)' : 'rgba(128, 128, 128, 0.1)')};
  box-shadow:${props => props.toggleInputFocus ? 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;' : 'rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;'};
`;
  
export const HeaderInput = styled.input<T.InputType>`
  color: ${ props => props.color};
  width:100%;
  height:90%;
  outline: none;
  border:none;
  background-color:transparent;
  font-size:14px;
  padding-left:5px;
`;

export const HeaderMenu = styled.div`
  display:flex;
  justify-content:end;
  align-items:center;
  height:100%;
  width:20%;
`;

export const HeaderMenuIn = styled.div`
  display:flex;
  width:100%; 
  justify-content:end;
`;

export const HeaderDropDown = styled.div<T.DropDownType>`
    display: ${props => props.toggleDropDown ? 'block' : 'none'};
    position:absolute;  
    background-color: ${props => props.toggleDarkTheme ? 'rgba(0,0,0, 1)' : '#f5f5f5' };
    color: ${props => props.toggleDarkTheme ? 'white' : 'black' };
    border-radius:4px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    border:1.5px solid gray;
    max-width:200px;
    margin-top:2%;
    animation: slide-in-top 0.3s ease-in-out;

    @keyframes slide-in-top {
      0% {
        transform: translateY(10px);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }

`;

export const HeaderMenuList = styled.ul`
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
  
export const HeaderMenuItem = styled.li<T.HeaderMenuItem>`
  transition:.2s;
  text-align:center;
  font-size:15px;
  opacity:.7;
  padding:8px 48px;
  border-top: 1.5px solid ${props => props.toggleDarkTheme ? 'white' : 'black' };; 
`;

export const Footer = styled.div`
  display:flex;
  flex-direction:column;
  width:100%;
  height:100%;
  align-items:center;
`;

export const FooterContent = styled.div`
  display:flex;
  height:85%;
  width:80%;
`;

export const FooterAbout = styled.div`
  width:50%;
  height:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
`;

export const FooterAboutFlex = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  margin:20px 0px;
`;

export const FooterSocials = styled.div`
  display:flex;
`;

export const FooterMenus = styled.div`
  display:flex;
  justify-content:end;
  align-items:center;
  height:100%;
  width:50%;
  
`;

export const FooterMenu = styled.ul`
  list-style:none;
  width:150px;
  height:100px;
   
`;

export const FooterMenuItem = styled.li<T.FooterMenuItemType>`
  margin:5px 0px;
  font-size:14px;
  cursor:pointer;
  color: ${props => props.color};
  &:hover{
    text-decoration:underline;
  }
`;

export const FooterBottom = styled.div<T.FooterBottomType>`
  height:15%;
  display:flex;
  align-items:center;
  justify-content:center;
  width:100%;
  border-top: ${props => props.bt};
`;

export const SubHeader = styled.div`
  width:80%;
  height:8%;
  display:flex;
  align-items:end;
`;