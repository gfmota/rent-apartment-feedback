import React from 'react';
import { useFeedbackSteps } from '../../hooks';
import { messages } from './messages';
import { StyledFade, StyledImage, StyledPhotoWrapper } from './styled';

const stepPhotos = [
  { imgSrc: './step1photo.jpg', altText: messages.beachAlt },
  { imgSrc: './step2photo.jpg', altText: messages.buildingAlt },
  { imgSrc: './step3photo.jpg', altText: messages.apartmentAlt }
];

export const Photo = () => {
  const { currentStep } = useFeedbackSteps();
  if (!currentStep) return null;
  const { imgSrc, altText } = stepPhotos[currentStep - 1];

  return (
    <StyledPhotoWrapper>
      <StyledImage
        src={imgSrc}
        alt={altText}
      />
      <StyledFade />
    </StyledPhotoWrapper>
  );
};
