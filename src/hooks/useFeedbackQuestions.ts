import { useCallback } from 'react';
import { useFeedbackContext } from '../state/FeedbackContext';

export const useFeedbackQuestions = () => {
  const { rate, setRate } = useFeedbackContext();

  const onRateChange = useCallback(
    (startInd: number) => setRate(startInd + 1),
    [setRate]
  );

  return {
    rate,
    onRateChange
  };
};
