import styled from 'styled-components'
import * as T from './types';

export const Container = styled.div<T.ContainerType>`
  background-color: ${props => props.bc};
  width:${props => props.width};
  height:${props => props.height};
  display:flex;
  align-items:center;
  justify-content:center;
`;

export const Paragraph = styled.p<T.ParagraphType>`
  margin:${props => props.m};
  padding:${props => props.p};
  font-size:${props => props.fs};
  font-family: ${props => props.ff};
  font-weight: ${props => props.fw};
  cursor: ${props => props.cursor};
`;

export const Icon = styled.img<T.IconType>`
  width: ${props => props.width};
  height: ${props => props.height}; 
  margin: ${props => props.m};
`;