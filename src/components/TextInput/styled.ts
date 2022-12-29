import styled from 'styled-components';
import { StyledDefaultProps } from '../../styles';

export const StyledTextInput = styled.textarea<StyledDefaultProps>`
  background-color: inherit;
  color: inherit;

  padding: 0.5em;
  margin: 1em;
  width: calc(100% - 3em - 6px);

  border: solid 2px ${(props) => props.palette.primary.main};
  font-size: inherit;
  border-radius: 1em;

  :focus {
    outline: none;
  }
`;
