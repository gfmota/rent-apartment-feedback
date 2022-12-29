import React from 'react';
import { useFeedbackSteps } from '../../hooks';
import { useStyle } from '../../styles';
import { messages } from './messages';
import { StyledFade, StyledImage, StyledPhotoWrapper } from './styled';

const stepPhotos = [
  { imgSrc: './step1photo.jpg', altText: messages.beachAlt },
  { imgSrc: './step2photo.jpg', altText: messages.buildingAlt },
  { imgSrc: './step3photo.jpg', altText: messages.apartmentAlt }
];

export const Photo = () => {
  const { currentStep } = useFeedbackSteps();
  const { palette } = useStyle();
  if (!currentStep) return null;
  const { imgSrc, altText } = stepPhotos[currentStep - 1];

  return (
    <StyledPhotoWrapper>
      <StyledImage
        src={imgSrc}
        alt={altText}
      />
      <StyledFade palette={palette} />
    </StyledPhotoWrapper>
  );
};
