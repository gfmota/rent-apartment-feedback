import React from 'react';
import { useFeedbackQuestions } from '../../hooks';
import { useStyle } from '../../styles';
import { StyledTextInput } from './styled';

export const TextInput = () => {
  const { comment, onCommentChange } = useFeedbackQuestions();
  const { palette } = useStyle();

  return (
    <StyledTextInput
      rows={5}
      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
        onCommentChange(e.target.value)
      }
      value={comment}
      palette={palette}
    />
  );
};
