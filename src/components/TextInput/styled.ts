import styled from 'styled-components';

export const StyledTextInput = styled.textarea`
  background-color: inherit;
  color: inherit;

  padding: 0.5em;
  margin: 1em;
  width: calc(100% - 3em - 6px);

  border: solid 2px white;
  font-size: inherit;
  border-radius: 1em;

  :focus {
    outline: none;
  }
`;
