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

  const sendAnswers = useCallback(() => {
    const postData = async () =>
      fetch(process.env.REACT_APP_FEEDBACK_API || '', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ date: new Date().toDateString(), comment, rate })
      });
    postData();
  }, [comment, rate]);

  return {
    rate,
    onRateChange,
    comment,
    onCommentChange,
    sendAnswers
  };
};
