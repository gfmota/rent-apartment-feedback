import { useContext } from 'react';
import {
  setCommentAction,
  setRateAction,
  setStepAction
} from './actions';
import { FeedbackContext } from './FeedbackContext';

export const useFeedbackContext = () => {
  const { state, dispatch } = useContext(FeedbackContext);

  const setRate = (rate: number) => dispatch(setRateAction(rate));
  const setComment = (comment: string) => dispatch(setCommentAction(comment));
  const setStep = (step: number) => dispatch(setStepAction(step));

  return {
    ...state,
    setRate,
    setComment,
    setStep
  };
};
