import React from 'react';
import { TbBeach } from 'react-icons/tb';
import { messages } from './messages';
import { StyledStepQuestionWrapper, StyledText } from './styled';

export const Home = () => (
  <StyledStepQuestionWrapper>
    <TbBeach
      size={64}
      title={messages.iconAlt}
    />
    <StyledText>{messages.home}</StyledText>
  </StyledStepQuestionWrapper>
);
