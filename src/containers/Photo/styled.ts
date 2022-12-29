import styled from 'styled-components';
import { StyledDefaultProps } from '../../styles';

export const StyledPhotoWrapper = styled.div`
  width: 100vw;
  position: fixed;
  top: 0;
`;

export const StyledImage = styled.img`
  width: 100%;
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
`;
