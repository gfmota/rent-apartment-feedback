import React from 'react';
import { BsEmojiSmile } from 'react-icons/bs';
import { withLazyLoad } from '../../components/LazyLoad';
import { StyledText } from '../../containers/Question/steps/styled';
import { messages } from './messages';
import { StyledCheckOutWrapper } from './styled';

export const CheckOut = () => (
  <StyledCheckOutWrapper>
    <BsEmojiSmile
      size={64}
      title={messages.smileAlt}
    />
    <StyledText>{messages.thankYou}</StyledText>
  </StyledCheckOutWrapper>
);

export const LazyLoadCheckout = withLazyLoad(CheckOut);
