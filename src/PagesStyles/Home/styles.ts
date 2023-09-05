import styled from 'styled-components';
import * as T from './types'

export const SubHeader = styled.div<T.SubHeaderType>`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  height:20%;  

`;

export const Span = styled.span`
  color:grey;
  font-size:50px;
`;

export const Plans = styled.div`
  display:flex;
  width:80%;
  justify-content:start;
  flex-direction:column;
`;

export const SubTitle = styled.h2<T.SubTitleType>`
  font-weight: 400;
  font-size:28px;
  color: ${ props => props.toggleDarkTheme ? 'white': 'black'}
`;

export const PlanCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 148px);
  grid-gap: 0px;
`;

export const PlanCard = styled.div<T.PlanCard>`
  display:flex;
  flex-direction:column;
  box-shadow: rgba(136, 165, 191, 0.48) 1px 0px 4px 0px, rgba(255, 255, 255, 0.8) -1px 0px 4px 0px;
  border-radius:5px;
  align-items:center;
  justify-content:center;
  width:140px;
  height:180px;
  cursor:pointer;
  transition: .3s ease;
  background-color: ${props => props.toggleDarkTheme ? 'black' : 'white'};
  
  &:hover{
    transform: scale(1.05);
  }

`;

export const PlanImage = styled.img`
  width:100%;
  height:85%;
`;

export const PlanText = styled.p<T.PlanTextType>`
  width:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  height:15%;
  margin:0;
  border-top:2px solid ${props => props.toggleDarkTheme ? 'white' : 'black'};
  font-size:18px;
  color: ${props => props.toggleDarkTheme ? 'white' : 'black'};
`;

export const Models = styled.div`
  display:flex;
  width:80%;
  justify-content:start;
  flex-direction:column;
  margin-top:20px;
  overflow:hidden;
  height:100%;
`;

export const ModelCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 360px);
  grid-template-rows: repeat(4, 320px);
  justify-content:center;
`;

export const ModelCard = styled.div<T.ModelCardType>`
  display:flex;
  flex-direction:column;
  box-shadow: ${props => props.toggleDarkTheme ? 'rgba(136, 165, 191, 0.48) 1px 0px 4px 0px, rgba(255, 255, 255, 0.8) -1px 0px 4px 0px;' : 'rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px'};
  border-radius:5px;
  align-items:center;
  justify-content:center;
  width:320px;
  height:280px;
  padding:10px;
  cursor:pointer;
  transition: .3s ease;
  background-color: ${props => props.toggleDarkTheme ? 'rgba(127,127,127, .2)' : 'white'};

  &:hover{
    transform: scale(1.035);
  }

`;

export const ModelImage = styled.img`
  width:100%;
  height:80%;
  border-radius: 5px 5px 0px 0px;
  object-fit:cover;
`;

export const ModelText = styled.p<T.ModelTextType>`
  width:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  height:10%;
  margin:5px 0;
  font-size:18px;
  color: ${props => props.toggleDarkTheme ? 'white' : 'black'};
`;

export const ModelButton = styled.button<T.ModelButtonType>`
  background-color:transparent;
  border:1px solid ${props => props.toggleDarkTheme ? 'white' : 'black'};
  border-radius:5px;
  outline:none;
  cursor:pointer;
  padding:5px 8px;
  font-size:14px;
  transition: .5s;
  height:10%;
  color: ${props => props.toggleDarkTheme ? 'white' : 'black'};

  &:hover{
    color: ${props => props.toggleDarkTheme ? 'black' : 'white'};
    background-color: ${props => props.toggleDarkTheme ? 'white' : 'rgba(0,0,0, .8)'};
  }
`;