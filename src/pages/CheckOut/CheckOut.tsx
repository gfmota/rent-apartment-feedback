import React from 'react';
import { BsEmojiSmile } from 'react-icons/bs';
import { withLazyLoad } from '../../components/LazyLoad';
import { messages } from './messages';
import { StyledCheckOutWrapper } from './styled';

export const CheckOut = () => (
  <StyledCheckOutWrapper>
    <BsEmojiSmile
      size={64}
      title={messages.smileAlt}
    />
    <div>{messages.thankYou}</div>
  </StyledCheckOutWrapper>
);

export const LazyLoadCheckout = withLazyLoad(CheckOut);
