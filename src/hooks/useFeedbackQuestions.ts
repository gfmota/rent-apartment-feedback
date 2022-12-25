import { useCallback } from 'react';
import { useFeedbackContext } from '../state/FeedbackContext';

export const useFeedbackQuestions = () => {
  const { rate, setRate, comment, setComment } = useFeedbackContext();

  const onRateChange = useCallback(
    (startInd: number) => setRate(startInd + 1),
    [setRate]
  );

  const onCommentChange = useCallback(
    (value: string) => setComment(value),
    [setComment]
  );

  return {
    rate,
    onRateChange,
    comment,
    onCommentChange
  };
};
