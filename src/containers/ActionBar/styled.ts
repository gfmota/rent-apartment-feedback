import styled from 'styled-components';
import { StyledDefaultProps } from '../../styles';

export const StyledActionBarWrapper = styled.div<StyledDefaultProps>`
  display: flex;
  justify-content: space-between;

  padding: 0.6em;
  border-top: 1px solid ${(props) => props.palette.primary.main};
  width: calc(100% - 1.2em);

  background-color: ${(props) => props.palette.background};
  position: fixed;
  bottom: 0;
`;
