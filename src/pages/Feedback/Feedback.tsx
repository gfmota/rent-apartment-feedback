import React from 'react';
import { ActionBar } from '../../containers/ActionBar';
import { Photo } from '../../containers/Photo';
import { Question } from '../../containers/Question';
import { StyledFeedbackWrapper } from './styled';

export const Feedback = () => (
  <StyledFeedbackWrapper>
    <Photo />
    <Question />
    <ActionBar />
  </StyledFeedbackWrapper>
);
