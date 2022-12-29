import { useFeedbackSteps } from '../../hooks';
import { STEPS_LENGTH } from '../../hooks/useFeedbackSteps';
import { useStyle } from '../../styles';
import { StyledStep, StyledStepsWrapper } from './styled';

export const Steps = () => {
  const { currentStep } = useFeedbackSteps();
  const { palette } = useStyle();

  return (
    <StyledStepsWrapper data-testid="Steps">
      {[...Array(STEPS_LENGTH)].map((value, ind) => (
        <StyledStep
          selected={ind + 1 === currentStep}
          key={ind}
          palette={palette}
          data-testid="step"
        />
      ))}
    </StyledStepsWrapper>
  );
};
