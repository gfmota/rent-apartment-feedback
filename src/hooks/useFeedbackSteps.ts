import { useCallback } from 'react';
import { useFeedbackContext } from '../state/FeedbackContext';

export const useFeedbackSteps = () => {
  const { step, setStep } = useFeedbackContext();

  const handleSubmit = useCallback(() => {
    return null;
  }, []);

  const onContinue = useCallback(() => {
    if (!step) return;
    if (step < 2) setStep(step + 1);
    else handleSubmit();
  }, [step, setStep, handleSubmit]);

  const onBack = useCallback(() => {
    if (!step || step == 0) return;
    setStep(step - 1);
  }, [setStep, step]);

  return {
    onContinue,
    onBack
  };
};
