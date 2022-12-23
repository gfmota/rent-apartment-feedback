import { FeedbackActions } from './constants';
import { FeedbackState } from './reducer';

export interface FeedbackAction {
  type: FeedbackActions;
  data: FeedbackState;
}

export const setRateAction = (rate: number) => ({
  type: FeedbackActions.SET_RATE,
  data: { rate }
});

export const setCommentAction = (comment: string) => ({
  type: FeedbackActions.SET_COMMENT,
  data: { comment }
});

export const setStepAction = (step: number) => ({
  type: FeedbackActions.SET_STEP,
  data: { step }
});
