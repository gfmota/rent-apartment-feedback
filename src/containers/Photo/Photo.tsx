import React from 'react';
import { useFeedbackSteps } from '../../hooks';
import { useStyle } from '../../styles';
import { messages } from './messages';
import { StyledFade, StyledImage, StyledPhotoWrapper } from './styled';

const stepPhotos = [
  { imgId: process.env.REACT_APP_IMAGE_1_ID, altText: messages.beachAlt },
  { imgId: process.env.REACT_APP_IMAGE_2_ID, altText: messages.buildingAlt },
  { imgId: process.env.REACT_APP_IMAGE_3_ID, altText: messages.apartmentAlt }
];

export const Photo = () => {
  const { currentStep } = useFeedbackSteps();
  const { palette } = useStyle();
  if (!currentStep) return null;
  const { imgId, altText } = stepPhotos[currentStep - 1];

  return (
    <StyledPhotoWrapper>
      <StyledImage
        src={`https://drive.google.com/uc?export=view&id=${imgId}`}
        alt={altText}
      />
      <StyledFade palette={palette} />
    </StyledPhotoWrapper>
  );
};
