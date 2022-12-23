import { useCallback } from 'react';
import { useFeedbackContext } from '../state/FeedbackContext';

export const STEPS_LENGTH = 3;

export const useFeedbackSteps = () => {
  const { step, setStep } = useFeedbackContext();

  const handleSubmit = useCallback(() => {
    return null;
  }, []);

  const onContinue = useCallback(() => {
    if (!step) return;
    if (step < STEPS_LENGTH) setStep(step + 1);
    else handleSubmit();
  }, [step, setStep, handleSubmit]);

  const onBack = useCallback(() => {
    if (!step || step == 1) return;
    setStep(step - 1);
  }, [setStep, step]);

  return {
    currentStep: step,
    onContinue,
    onBack
  };
};
