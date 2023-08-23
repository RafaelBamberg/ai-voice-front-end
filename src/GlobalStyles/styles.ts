import styled from 'styled-components'
import { ContainerType } from './types';

export const Container = styled.div<ContainerType>`
  background-color: ${props => props.backgroundColor};
  width:${props => props.width};
  height:${props => props.height};
`;