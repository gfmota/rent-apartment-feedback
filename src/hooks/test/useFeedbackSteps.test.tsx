/* eslint-disable react/display-name */
import React from 'react';
import { renderHook } from '@testing-library/react';
import { STEPS_LENGTH, useFeedbackSteps } from '../useFeedbackSteps';
import { FeedbackContext } from '../../state/FeedbackContext';
import { setStepAction } from '../../state/FeedbackContext/actions';

jest.mock('../../state/FeedbackContext/actions');

const defaultState = {
  step: 1
};
const dispatch = jest.fn();

const buildWrapper =
  (state: { step: number } = defaultState) =>
  ({ children }: React.PropsWithChildren) =>
    (
      <FeedbackContext.Provider value={{ state, dispatch }}>
        {children}
      </FeedbackContext.Provider>
    );

describe('useFeedbackSteps', () => {
  it('should return context step as currentStep', () => {
    const { result } = renderHook(useFeedbackSteps, {
      wrapper: buildWrapper()
    });

    expect(result.current.currentStep).toBe(1);
  });

  it('should increase step onContinue', () => {
    const { result } = renderHook(useFeedbackSteps, {
      wrapper: buildWrapper()
    });
    result.current.onContinue();

    expect(setStepAction).toBeCalledWith(2);
  });

  it('shouldNT increase step onContinue if last step', () => {
    const { result } = renderHook(useFeedbackSteps, {
      wrapper: buildWrapper({ step: STEPS_LENGTH })
    });
    result.current.onContinue();

    expect(setStepAction).not.toBeCalled();
  });

  it('should decrease step onBack', () => {
    const { result } = renderHook(useFeedbackSteps, {
      wrapper: buildWrapper({ step: 2 })
    });
    result.current.onBack();

    expect(setStepAction).toBeCalledWith(1);
  });

  it('shouldnt decrease step onBack if step 1', () => {
    const { result } = renderHook(useFeedbackSteps, {
      wrapper: buildWrapper()
    });
    result.current.onBack();

    expect(setStepAction).not.toBeCalled();
  });

  it('back button should be disabled if first step', () => {
    const { result } = renderHook(useFeedbackSteps, {
      wrapper: buildWrapper()
    });

    expect(result.current.isBackButtonEnabled).toBe(false);
  });

  it('back button should be enabled if not first step', () => {
    const { result } = renderHook(useFeedbackSteps, {
      wrapper: buildWrapper({ step: 3 })
    });

    expect(result.current.isBackButtonEnabled).toBe(true);
  });
});
