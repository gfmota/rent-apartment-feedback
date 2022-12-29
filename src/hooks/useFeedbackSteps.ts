import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFeedbackContext } from '../state/FeedbackContext';
import { useFeedbackQuestions } from './useFeedbackQuestions';

export const STEPS_LENGTH = 3;

export const useFeedbackSteps = () => {
  const { step, setStep } = useFeedbackContext();
  const { sendAnswers } = useFeedbackQuestions();
  const navigate = useNavigate();

  const handleSubmit = useCallback(() => {
    sendAnswers();
    navigate('/checkout');
    return null;
  }, [navigate, sendAnswers]);

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
    onBack,
    isBackButtonEnabled: step !== 1
  };
};
