import { useFeedbackSteps } from '../../hooks';
import { Home, Rate, Comment } from './steps';

const stepsQuestions = [Home, Rate, Comment];

export const Question = () => {
  const { currentStep } = useFeedbackSteps();
  if (!currentStep || currentStep > stepsQuestions.length) return null;
  const CurrentQuestion = stepsQuestions[currentStep - 1];

  return <CurrentQuestion />;
};
