import { styled } from "styled-components";
import * as T from './types'

export const Model = styled.div`
  width:80%;
  height:80%;
  display:flex;
  margin-top:10px;
`;

export const ModelLeft = styled.div`  
  width:80%;
  height:100%;
  display:flex;
  flex-direction:column;
`;

export const ModelRight = styled.div`
  width:20%;
  display:flex;
  flex-direction:column;
  height:70%;
  justify-content:space-between;
`;

export const ModelHistory = styled.div``;

export const ModelSocials = styled.div``;

export const ModelHeader = styled.div`
  width:80%;
  height:40%;
  display:flex;
  align-items:start;
  justify-content:space-between;
`;

export const ModelImage = styled.img`
  width:350px;
  height:100%;
`;

export const ModelInfo = styled.div`
  width:50%;
  height:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-around;
`;

export const ModelRating = styled.div`
  display:flex;
  align-items:end;
`;

export const ModelAudio = styled.div`
  width:100%;
  height:50%;
  display:flex;
  margin-top:50px;
`;

export const ModelRulesAudio = styled.div`
  display:flex;
  flex-direction:column;
  width:50%;
  height:100%;
  justify-content:space-around;
`;

export const AudioInput = styled.div<T.AudioInputType>`
  display:flex;
  width:50%;
  flex-direction:column;
  height:70%;
  justify-content:space-around;

  input[type="file"] {
    display: none;
  }

  .file-upload {
    border: 2px dashed ${props => props.toggleDarkTheme ? '#ccc' : 'black'};
    text-align: center;
    cursor: pointer;
    border-radius:10px;
    background-color: ${props => props.toggleDarkTheme ? 'rgba(255,255,255, .1)' : 'white'};
    color: ${props => props.toggleDarkTheme ? 'white' : 'black'};
  }
  
  .file-upload.dragging {
    background-color: #f0f0f0;
  }

`;

export const Label = styled.label`
  background-color:white;
  height:60%;
  width:80%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  font-weight:bold;
  font-size:18px;
`

export const Input = styled.input`
  background-color:white;
  border:2px solid white;
  width:100%;
  height:100%:
  border-radius:5px;
  text-align:center;
`;

export const OutputArea = styled.div<T.OutputAreaType>`
  border: 2px dashed ${props => props.toggleDarkTheme ? '#ccc' : 'black'};
  margin-top:10px;
  background-color: rgba(255,255,255, .1);
  width:50%;
  align-items:center;
  justify-content:center;
  margin-top:10px;
  border-radius:5px;
`;

export const Output = styled.audio<T.OutputType>`
  border: 2px dashed ${props => props.toggleDarkTheme ? '#ccc' : 'black'};
  background-color: rgba(255,255,255, .1);
  width:50%;
  display:flex;
  padding:30px 20px;
  border-radius:5px;
  align-items:center;
  justify-content:center;
  margin-top:10px;

`;

export const AudioOutput = styled.div`
  width:100%;
  height:100%;
  display:flex;
  align-items:start;
  flex-direction:column;
  margin:10px 0px;
`;  

export const ModelSocialItem = styled.div`
  display:flex;
  align-items:center;
  text-decoration:underline;
  text-decoration-color: white;
  
  p{
    cursor:pointer;
  }
`;

export const ButtonFooter = styled.div`
  display:flex;
  width:80%;
  align-items:end;
  justify-content:end;
`;