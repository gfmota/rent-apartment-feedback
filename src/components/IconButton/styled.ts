import styled from 'styled-components';
import { StyledDefaultProps } from '../../styles';

export const StyledButton = styled.button<StyledDefaultProps>`
  border: none;
  background-color: inherit;
  color: ${(props) => props.palette.primary.main};
`;
