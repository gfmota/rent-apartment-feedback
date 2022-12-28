import React from 'react';
import { withLazyLoad } from '../../../components/LazyLoad';
import { TextInput } from '../../../components/TextInput';
import { messages } from './messages';
import { StyledStepQuestionWrapper, StyledText } from './styled';

export const Comment = () => (
  <StyledStepQuestionWrapper>
    <StyledText>{messages.comment}</StyledText>
    <TextInput />
  </StyledStepQuestionWrapper>
);

export const LazyLoadComment = withLazyLoad(Comment);
