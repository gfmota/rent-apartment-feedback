import React from 'react';
import styled, { keyframes } from 'styled-components';

const StyledLoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const LoadingCircleAnimation = keyframes`
	from { transform: rotate(0deg); }
	to { transform: rotate(360deg); }
`;

const StyledLoading = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid white;
    border-radius: 50%;
    animation: ${LoadingCircleAnimation} 1.2s cubic-bezier(0.5, 0, 0.5, 1)
      infinite;
    border-color: white transparent transparent transparent;
  }
  div:nth-child(1) {
    animation-delay: -0.45s;
  }
  div:nth-child(2) {
    animation-delay: -0.3s;
  }
  div:nth-child(3) {
    animation-delay: -0.15s;
  }
`;

export const Loading = () => (
  <StyledLoadingWrapper>
    <StyledLoading>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </StyledLoading>
  </StyledLoadingWrapper>
);
