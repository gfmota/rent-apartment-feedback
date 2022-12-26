import React from 'react';
import { BsEmojiSmile } from 'react-icons/bs';
import { messages } from './messages';
import { StyledStepQuestionWrapper, StyledText } from './styled';

export const Home = () => (
  <StyledStepQuestionWrapper>
    <BsEmojiSmile size={64} />
    <StyledText>{messages.home}</StyledText>
  </StyledStepQuestionWrapper>
);
