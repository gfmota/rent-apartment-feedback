import React from 'react';
import { withLazyLoad } from '../../components/LazyLoad';
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

export const LazyLoadFeedback = withLazyLoad(Feedback);
