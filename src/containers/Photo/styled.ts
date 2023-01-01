import styled, { keyframes } from 'styled-components';
import { StyledDefaultProps } from '../../styles';

export const StyledPhotoWrapper = styled.div`
  width: 100vw;
  height: ${() => (window.innerWidth * 260) / 375}px;
  position: fixed;
  top: 0;
`;

export const StyledImage = styled.img`
  width: 100%;
  position: absolute;
`;

export const StyledFade = styled.div<StyledDefaultProps>`
  position: absolute;
  bottom: 0;
  height: 20%;
  width: 100%;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0),
    ${(props) => props.palette.background}
  );
  z-index: 1;
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const StyledFadeIn = styled.div`
  animation: ${fadeIn} 0.6s ease-out forwards;
  opacity: 0;
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

export const StyledFadeOut = styled.div`
  animation: ${fadeOut} 0.6s ease-out forwards;
  opacity: 1;
`;
