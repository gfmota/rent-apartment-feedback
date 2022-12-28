import React from 'react';
import { withLazyLoad } from '../../../components/LazyLoad';
import { RateInput } from '../../../components/RateInput';
import { messages } from './messages';
import { StyledStepQuestionWrapper, StyledText } from './styled';

export const Rate = () => (
  <StyledStepQuestionWrapper>
    <StyledText>{messages.rate}</StyledText>
    <RateInput />
  </StyledStepQuestionWrapper>
);

export const LazyLoadRate = withLazyLoad(Rate);
