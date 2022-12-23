import { IconButton } from '../IconButton';
import { FaArrowLeft } from 'react-icons/fa';
import { useFeedbackSteps } from '../../hooks';

export const BackButton = () => {
  const { onBack } = useFeedbackSteps();

  return (
    <IconButton
      alt="Voltar"
      IconComponent={FaArrowLeft}
      onClick={onBack}
    />
  );
};
