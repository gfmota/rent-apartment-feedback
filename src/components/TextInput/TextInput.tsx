import React from 'react';
import { useFeedbackQuestions } from '../../hooks';
import { StyledTextInput } from './styled';

export const TextInput = () => {
  const { comment, onCommentChange } = useFeedbackQuestions();

  return (
    <StyledTextInput
      rows={5}
      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
        onCommentChange(e.target.value)
      }
      value={comment}
    />
  );
};
