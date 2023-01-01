import React from 'react';
import { useFeedbackSteps } from '../../hooks';
import { useStyle } from '../../styles';
import AnimationSwitcher from './AnimationSwitcher';
import { messages } from './messages';
import { StyledFade, StyledImage, StyledPhotoWrapper } from './styled';

const STEP_PHOTOS = [
  { imgId: process.env.REACT_APP_IMAGE_1_ID, altText: messages.beachAlt },
  { imgId: process.env.REACT_APP_IMAGE_2_ID, altText: messages.buildingAlt },
  { imgId: process.env.REACT_APP_IMAGE_3_ID, altText: messages.apartmentAlt }
];

export const Photo = () => {
  const { currentStep } = useFeedbackSteps();
  const { palette } = useStyle();
  if (!currentStep) return null;

  return (
    <StyledPhotoWrapper>
      {STEP_PHOTOS.map(({ imgId, altText }, ind) => (
        <AnimationSwitcher
          key={altText}
          willUnmount={currentStep !== ind + 1}
        >
          <StyledImage
            src={`https://drive.google.com/uc?export=view&id=${imgId}`}
            alt={altText}
          />
        </AnimationSwitcher>
      ))}
      <StyledFade palette={palette} />
    </StyledPhotoWrapper>
  );
};
