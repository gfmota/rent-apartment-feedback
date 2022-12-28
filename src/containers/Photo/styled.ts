import styled from 'styled-components';

export const StyledPhotoWrapper = styled.div`
  width: 100vw;
  position: relative;
`;

export const StyledImage = styled.img`
  width: 100%;
`;

export const StyledFade = styled.div`
  position: absolute;
  bottom: 0;
  height: 20%;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
`;
