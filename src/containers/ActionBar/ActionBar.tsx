import React from 'react';
import { BackButton } from '../../components/BackButton';
import { ContinueButton } from '../../components/ContinueButton';
import { Steps } from '../../components/Steps';
import { useFeedbackSteps } from '../../hooks';
import { useStyle } from '../../styles';
import { StyledActionBarWrapper } from './styled';

export const ActionBar = () => {
  const { isBackButtonEnabled } = useFeedbackSteps();
  const { palette } = useStyle();

  return (
    <StyledActionBarWrapper palette={palette}>
      {isBackButtonEnabled ? <BackButton /> : <div style={{ width: '44px' }} />}
      <Steps />
      <ContinueButton />
    </StyledActionBarWrapper>
  );
};
