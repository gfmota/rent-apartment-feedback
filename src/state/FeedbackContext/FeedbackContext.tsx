import React, { useMemo, useReducer } from 'react';
import { FeedbackAction } from './actions';
import { feedbackReducer, FeedbackState } from './reducer';

const initialState: FeedbackState = {
  step: 0
};

export const FeedbackContext = React.createContext<{
  state: FeedbackState;
  dispatch: React.Dispatch<FeedbackAction>;
}>({
  state: initialState,
  dispatch: () => null
});

export const FeedbackProvider = ({ children }: React.PropsWithChildren) => {
  const [state, dispatch] = useReducer(feedbackReducer, initialState);
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <FeedbackContext.Provider value={contextValue}>
      {children}
    </FeedbackContext.Provider>
  );
};
