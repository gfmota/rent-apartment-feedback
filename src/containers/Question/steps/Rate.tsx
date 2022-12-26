import React from 'react';
import { RateInput } from '../../../components/RateInput';
import { messages } from './messages';
import { StyledStepQuestionWrapper, StyledText } from './styled';

export const Rate = () => (
  <StyledStepQuestionWrapper>
    <StyledText>{messages.rate}</StyledText>
    <RateInput />
  </StyledStepQuestionWrapper>
);
