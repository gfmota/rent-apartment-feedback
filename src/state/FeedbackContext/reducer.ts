import { FeedbackAction } from './actions';
import { FeedbackActions } from './constants';

export interface FeedbackState {
  rate?: number;
  comment?: string;
  step?: number;
}

export const feedbackReducer = (
  state: FeedbackState,
  { type, data }: FeedbackAction
): FeedbackState => {
  switch (type) {
    case FeedbackActions.SET_RATE:
      return {
        ...state,
        rate: data.rate
      };
    case FeedbackActions.SET_COMMENT:
      return {
        ...state,
        comment: data.comment
      };
    case FeedbackActions.SET_STEP:
      return {
        ...state,
        step: data.step
      };
    default:
      throw new Error('Invalid action type');
  }
};
