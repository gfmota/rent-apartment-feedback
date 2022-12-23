import { IconButton } from '../IconButton';
import { FaArrowRight } from 'react-icons/fa';
import { useFeedbackSteps } from '../../hooks';

export const ContinueButton = () => {
  const { onContinue } = useFeedbackSteps();

  return (
    <IconButton
      alt="Próximo"
      IconComponent={FaArrowRight}
      onClick={onContinue}
    />
  );
};
