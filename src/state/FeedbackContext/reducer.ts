import { FeedbackAction } from './actions';
import { FeedbackActions } from './constants';

export interface FeedbackState {
  name?: string;
  rate?: number;
  comment?: string;
  step?: number;
}

export const feedbackReducer = (
  state: FeedbackState,
  { type, data }: FeedbackAction
): FeedbackState => {
  switch (type) {
    case FeedbackActions.SET_NAME:
      return {
        ...state,
        name: data.name
      };
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
