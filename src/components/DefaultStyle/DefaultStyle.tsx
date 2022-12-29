import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { StyledDefaultProps, useStyle } from '../../styles';

const StyledDefaultWrapper = styled.div<StyledDefaultProps>`
  color: ${(props) => props.palette.primary.main};
  background-color: ${(props) => props.palette.background};
  font-size: 1.5em;
  font-weight: bold;
  height: ${() => window.innerHeight}px;
`;

export const DefaultStyle = ({ children }: PropsWithChildren) => {
  const { palette } = useStyle();
  return (
    <StyledDefaultWrapper palette={palette}>{children}</StyledDefaultWrapper>
  );
};
