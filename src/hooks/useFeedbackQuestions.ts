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
    const message = `
      <b>🏢 TESTE</b> %0A ⭐ Nota: ${rate} %0A 💬 Comentário: ${comment}
    `;
    const sendMessage = async () =>
      fetch(
        `https://api.telegram.org/bot${process.env.REACT_APP_BOT_ID}/sendMessage?chat_id=${process.env.REACT_APP_CHAT_ID}&text=${message}&parse_mode=html`,
        {
          method: 'GET',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
    sendMessage();
  }, [comment, rate]);

  return {
    rate,
    onRateChange,
    comment,
    onCommentChange,
    sendAnswers
  };
};
