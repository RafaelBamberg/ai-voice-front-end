import styled from 'styled-components'
import * as T from './types';

export const Loading = styled.div<T.LoadingPageType>`
width:100vw;
height:100vh;
display:flex;
align-items:center;
justify-content:center;
background-color:${props => props.toggleDarkTheme ? 'rgba(0,0,0, .85)' : '#f5f5f5'};

span{
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: inline-block;
  border-top: 4px solid ${props => props.toggleDarkTheme ? 'white' : 'grey'};
  border-right: 4px solid transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
} 

`;