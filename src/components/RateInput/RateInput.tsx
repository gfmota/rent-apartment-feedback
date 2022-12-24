import React from 'react';
import { StyledRateInputWrapper } from './styled';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { IconButton } from '../IconButton';
import { useFeedbackQuestions } from '../../hooks';

export const RateInput = () => {
  const { rate, onRateChange } = useFeedbackQuestions();

  return (
    <StyledRateInputWrapper>
      {[...Array(5)].map((value, ind) => (
        <IconButton
          key={ind}
          alt={`${ind + 1}`}
          onClick={() => onRateChange(ind)}
          IconComponent={rate && ind < rate ? AiFillStar : AiOutlineStar}
        />
      ))}
    </StyledRateInputWrapper>
  );
};
