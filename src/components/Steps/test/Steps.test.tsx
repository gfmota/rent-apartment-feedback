import { render, screen } from '@testing-library/react';
import { Steps } from '../Steps';
import { useFeedbackSteps } from '../../../hooks';
import { STEPS_LENGTH } from '../../../hooks/useFeedbackSteps';
import { PALETTE } from '../../../styles/constants';

jest.mock('../../../hooks');

describe('Steps', () => {
  beforeEach(() =>
    (useFeedbackSteps as jest.Mock).mockReturnValue({ currentStep: 2 })
  );

  it('should render correctly', () => {
    render(<Steps />);

    expect(screen.getAllByTestId('step')).toHaveLength(STEPS_LENGTH);
  });

  it('should render current step selected', () => {
    render(<Steps />);
    const steps = screen.getAllByTestId('step');

    expect(steps[1]).toHaveStyle(
      `background-color: ${PALETTE.light.primary.main}`
    );
  });
});
