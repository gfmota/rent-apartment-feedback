import { useFeedbackSteps } from '../../hooks';
import { STEPS_LENGTH } from '../../hooks/useFeedbackSteps';
import { StyledStep, StyledStepsWrapper } from './styled';

export const Steps = () => {
  const { currentStep } = useFeedbackSteps();

  return (
    <StyledStepsWrapper>
      {[...Array(STEPS_LENGTH)].map((value, ind) => (
        <StyledStep
          selected={ind + 1 === currentStep}
          key={ind}
        />
      ))}
    </StyledStepsWrapper>
  );
};
